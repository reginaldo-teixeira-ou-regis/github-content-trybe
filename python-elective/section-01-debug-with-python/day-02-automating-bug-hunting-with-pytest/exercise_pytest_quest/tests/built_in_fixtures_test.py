import pytest

from src.hex_converter import (  # noqa: F401
    main,
    print_hexadecimal_to_decimal,
    write_hexadecimal_to_decimal,
)

# aplica o marcador de dependency para todos os testes do arquivo
pytestmark = pytest.mark.dependency  # NÃO REMOVA ESSA LINHA


def test_monkeypatch(monkeypatch):
    def mock_input(_):
        return "a"

    monkeypatch.setattr("builtins.input", mock_input)
    assert main() == 10


def test_capsys(capsys):
    input_value = "a"
    expected_stdout = "10\n"
    expected_stderr = ""

    print_hexadecimal_to_decimal(input_value)

    captured = capsys.readouterr()
    assert captured.out == expected_stdout
    assert captured.err == expected_stderr


def test_tmp_path(tmp_path):
    input_value = "a"
    expected_output = "10"

    output_file = tmp_path / "output.txt"
    write_hexadecimal_to_decimal(input_value, output_file)

    assert output_file.exists()
    assert output_file.name == "output.txt"
    assert output_file.read_text() == expected_output
