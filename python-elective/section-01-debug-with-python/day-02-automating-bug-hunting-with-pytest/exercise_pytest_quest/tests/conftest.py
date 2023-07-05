import pytest


@pytest.fixture(scope="module")
def custom_fixture():
    numbers = list(range(1, 11))
    yield numbers


def test_access_fixture(custom_fixture):
    assert custom_fixture == list(range(1, 11))


def test_remove_numbers(custom_fixture):
    custom_fixture.remove(10)
    custom_fixture.remove(1)


def test_modify_fixture(custom_fixture):
    modified_fixture = custom_fixture.copy()
    modified_fixture.pop()
    # modified_fixture.pop(0)
    assert modified_fixture == list(range(2, 9))
