import os
import json

class OutputManager:

    def save(self,name,data):
        os.makedirs('projects/generated',exist_ok=True)

        path=f'projects/generated/{name}.json'

        with open(path,'w') as file:
            json.dump(data,file,indent=4)

        return path
