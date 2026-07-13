import json
import os

CONFIG='bude-engine/ai_config.json'

class AIEngine:

    def __init__(self):
        self.config=self.load_config()


    def load_config(self):
        if os.path.exists(CONFIG):
            with open(CONFIG,'r') as file:
                return json.load(file)

        return {
            'provider':'local',
            'model':'none'
        }


    def generate(self,prompt,category):

        return {
            'engine':self.config['provider'],
            'model':self.config['model'],
            'category':category,
            'prompt':prompt,
            'status':'Ready for model connection'
        }
