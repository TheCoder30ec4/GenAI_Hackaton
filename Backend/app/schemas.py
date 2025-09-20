from pydantic import BaseModel, EmailStr

# Input schema for signup
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

# Input schema for login
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# Output schema (what you return after signup or protected routes)
class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr

    class Config:
        orm_mode = True
