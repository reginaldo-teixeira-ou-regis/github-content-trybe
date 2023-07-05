import pytest
from src.hex_converter import hexadecimal_to_decimal

pytestmark = pytest.mark.dependency


@pytest.mark.parametrize(
    "hexadecimal, expected_decimal",
    [
        ("8", 8),
        ("9", 9),
        ("a", 10),
        ("b", 11),
        ("c", 12),
        ("e", 14),
        ("f", 15),
    ],
)
def test_converter(hexadecimal, expected_decimal):
    decimal = hexadecimal_to_decimal(hexadecimal)
    assert decimal == expected_decimal
