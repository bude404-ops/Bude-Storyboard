import json
import os

class AICore:

    def __init__(self):
        self.name='BudE Creative Intelligence'


    def generate(self,prompt,category='story'):

        output={
            'category':category,
            'prompt':prompt,
            'result':self.create_response(prompt,category)
        }

        return output


    def create_response(self,prompt,category):

        if category=='character':
            return {
                'name':'Generated Character',
                'concept':prompt,
                'appearance':'AI generated appearance pending model connection',
                'personality':'AI generated personality pending model connection'
            }

        if category=='world':
            return {
                'name':'Generated World',
                'concept':prompt,
                'history':'Generated world history pending model connection'
            }

        return {
            'title':'Generated Story',
            'concept':prompt,
            'outline':[
                'Beginning',
                'Conflict',
                'Resolution'
            ]
        }
