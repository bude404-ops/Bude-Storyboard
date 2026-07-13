import os
import json

PROJECTS='projects'

class ProjectManager:

    def create_project(self,name):
        path=f'{PROJECTS}/{name}'
        os.makedirs(path,exist_ok=True)

        data={
            'name':name,
            'stories':[],
            'characters':[],
            'worlds':[]
        }

        with open(f'{path}/project.json','w') as f:
            json.dump(data,f,indent=4)

        return path

    def list_projects(self):
        return os.listdir(PROJECTS)
