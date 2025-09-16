from fastapi import APIRouter

router = APIRouter()

@router.get("/items/")
def read_items():
    return [{"name": "Item Foo"}, {"name": "Item Bar"}]
