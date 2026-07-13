import json
import os

MODEL_FILE='bude-engine/models.json'

class ModelManager:

    def __init__(self):
        self.models=self.load()


    def load(self):
        if os.path.exists(MODEL_FILE):
            with open(MODEL_FILE,'r') as file:
                return json.load(file)

        return {'models':[]}


    def add_model(self,name,path):
        self.models['models'].append({
            'name':name,
            'path':path,
            'active':False
        })

        self.save()


    def save(self):
        with open(MODEL_FILE,'w') as file:
            json.dump(self.models,file,indent=4)
