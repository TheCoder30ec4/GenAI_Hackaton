from fastapi import FastAPI, status, Depends, HTTPException
from . import auth, models, database, dependencies

# Use Base from database.py, NOT models.py
database.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Personalised AI Trip Planner")

app.include_router(auth.router, prefix="/auth", tags=["Auth"])

@app.get("/")
def root():
    return {"message": "Backend is running"}

# Protected example
@app.get("/users/me")
def read_users_me(current_user=dependencies.get_current_user):
    return {"id": current_user.id, "name": current_user.name, "email": current_user.email}
