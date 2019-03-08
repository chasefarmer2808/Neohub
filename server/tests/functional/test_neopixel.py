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
    assert len(response.data) > 0

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