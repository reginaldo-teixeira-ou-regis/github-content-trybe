from task_manager import database


def test_read_database_should_be_empty_at_start():
    db_content = database.read()
    assert db_content == []
