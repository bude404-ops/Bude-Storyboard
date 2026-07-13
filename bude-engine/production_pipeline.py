import json
import os

class ProductionPipeline:

    def create_production(self,name):

        production={
            'name':name,
            'world':'',
            'characters':[],
            'story':'',
            'storyboard':'',
            'art_style':'',
            'status':'planning'
        }

        os.makedirs('projects/productions',exist_ok=True)

        path=f'projects/productions/{name}.json'

        with open(path,'w') as file:
            json.dump(production,file,indent=4)

        return path


    def update_stage(self,production,stage,value):
        production[stage]=value
        return production
