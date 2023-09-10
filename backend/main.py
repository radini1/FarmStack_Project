from fastapi import FastAPI , HTTPException , status
from fastapi.middleware.cors import CORSMiddleware 
from database import * 

app = FastAPI()

# Interacting with frontend and react port ( 3000 ).
origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*']
)

@app.get('/')
async def read_root():
    return {'hey':'guys'}

@app.get('/api/todo')
async def get_todo():
    response = await fetch_all_todos()
    return response 

@app.get('/api/todo{title}', response_model=Todo)
async def get_todo_by_title(title):
    response = await fetch_one_todo(title)
    if response:
        return response 
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='This title is invalid.')

@app.post('/api/todo', response_model=Todo)
async def post_todo(todo:Todo):
    response = await  create_todo(todo.dict())
    if response:
        return response 
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Something went wrong.')

@app.put('/api/todo{title}/', response_model=Todo)
async def put_todo(title: str, desc: str):
    response = await update_todo(title, desc)
    if response:
        return response 
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='This title is invalid.')

@app.delete('/api/todo{title}')
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return "The task has been successfuly deleted."
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='This title is invalid.')