class AIDirector:

    def review_story(self,story):
        return {
            'score':0,
            'pacing':'Review needed',
            'characters':'Review needed',
            'emotion':'Review needed',
            'suggestions':[]
        }


    def suggest_improvements(self,production):
        suggestions=[]

        if not production.get('characters'):
            suggestions.append('Add character development')

        if not production.get('story'):
            suggestions.append('Develop story structure')

        return suggestions


    def camera_notes(self,scene):
        return {
            'camera':'Suggested cinematic angle',
            'lighting':'Suggested lighting style'
        }
