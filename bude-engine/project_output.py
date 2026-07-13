import os
import json

class ProjectOutput:

    def save(self,name,data):

        os.makedirs('projects/generated',exist_ok=True)

        with open(f'projects/generated/{name}.json','w') as file:
            json.dump(data,file,indent=4)

        return True
