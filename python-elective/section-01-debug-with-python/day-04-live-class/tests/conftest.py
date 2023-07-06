import pytest


@pytest.fixture(autouse=True)
def patch_database_path(monkeypatch, tmp_path):
    mock_json_db = tmp_path / "database.json"
    monkeypatch.setattr("task_manager.database.DATABASE_PATH", mock_json_db)
