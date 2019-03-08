import json
from bson.objectid import ObjectId

def test_get_should_return_empty(test_client):
    response = test_client.get('/api/strip')
    
    assert response.status_code == 200
    assert response.data == b'[]\n'

def test_post_should_create_new_neopixel(test_client, init_database):
    data = {
        'pin': 18,
        'num_pixels': 6,
        'brightness': 60
    }

    response = test_client.post('/api/strip', data=data)

    assert response.status_code == 200
    assert len(response.data) > 0

    response = test_client.get('/api/strip')
    assert response.status_code == 200
    assert len(json.loads(response.data.decode('utf-8'))) == 1

def test_post_should_return_400_with_invalid_brightness(test_client):
    data = {
        'pin': 18,
        'num_pixels': 6,
        'brightness': 0.1
    }

    response = test_client.post('/api/strip', data=data)

    assert response.status_code == 400

def test_post_should_return_500_with_zero_brightness(test_client):
    data = {
        'pin': 18,
        'num_pixels': 6,
        'brightness': 0
    }

    response = test_client.post('/api/strip', data=data)

    assert response.status_code == 500

def test_put_should_update_pixel(test_client, init_database):
    data = {
        'pin': 18,
        'num_pixels': 6,
        'brightness': 60
    }

    response = test_client.post('/api/strip', data=data)

    strip_id = response.data.decode('utf-8').replace('\n', '').replace('\"', '')

    data = {
        '_id': ObjectId(strip_id),
        'index_start': 1,
        'index_end': 1,
        'r': 255,
        'g': 255,
        'b': 255
    }

    test_client.put('/api/strip', data=data)

    response = test_client.get('/api/strip')
    assert b'[255, 255, 255]' in response.data

def test_put_should_limit_rgb_values(test_client, init_database):
    data = {
        'pin': 18,
        'num_pixels': 6,
        'brightness': 60
    }

    response = test_client.post('/api/strip', data=data)

    strip_id = response.data.decode('utf-8').replace('\n', '').replace('\"', '')

    data = {
        '_id': ObjectId(strip_id),
        'index_start': 1,
        'index_end': 1,
        'r': 1000,
        'g': 1000,
        'b': 1000
    }

    test_client.put('/api/strip', data=data)

    response = test_client.get('/api/strip')
    assert b'[255, 255, 255]' in response.data

def test_delete_should_remove_neopixel(test_client, init_database):
    data = {
        'pin': 18,
        'num_pixels': 6,
        'brightness': 60
    }

    response = test_client.post('/api/strip', data=data)

    strip_id = response.data.decode('utf-8').replace('\n', '').replace('\"', '')

    data = {
        '_id': ObjectId(strip_id),
    }

    response = test_client.delete('/api/strip', data=data)
    assert response.status_code == 200

    response = test_client.get('/api/strip', data=data)
    assert response.status_code == 200
    assert len(json.loads(response.data.decode('utf-8'))) == 0