import os
import json

WORLD_FOLDER='projects/worlds'

class WorldManager:

    def create_world(self,name):
        os.makedirs(WORLD_FOLDER,exist_ok=True)

        world={
            'name':name,
            'type':'',
            'history':'',
            'regions':[],
            'cities':[],
            'cultures':[],
            'languages':[],
            'politics':[],
            'religions':[],
            'technology_level':'',
            'species':[]
        }

        path=f'{WORLD_FOLDER}/{name}.json'

        with open(path,'w') as file:
            json.dump(world,file,indent=4)

        return path

    def load_world(self,name):
        path=f'{WORLD_FOLDER}/{name}.json'

        with open(path,'r') as file:
            return json.load(file)
