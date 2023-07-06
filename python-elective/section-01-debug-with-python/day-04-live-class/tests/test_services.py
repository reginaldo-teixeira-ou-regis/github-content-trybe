import pytest
from task_manager import services
from unittest.mock import patch, Mock


def test_get_tasks_should_return_same_as_database_read():
    mock_db_read = Mock()

    with patch("task_manager.database.read", mock_db_read):
        res = services.get_tasks()

    assert res == mock_db_read.return_value
    mock_db_read.assert_called_once()


def test_creat_task_should_call_database_save():
    mock_db_save = Mock()

    with patch("task_manager.database.save", mock_db_save):
        services.create_task("Finalizar a aula com sucesso")

    mock_db_save.assert_called_once()
    mock_db_save.assert_called_with(
        [{"id": 1, "name": "Finalizar a aula com sucesso", "completed": False}]
    )


def test_create_task_should_raise_error_with_invalid_name():
    with pytest.raises(TypeError, match="Task name must be a string"):
        services.create_task(123)

    with pytest.raises(
        ValueError, match="Task name must have at least 3 characters"
    ):
        services.create_task("ab")
