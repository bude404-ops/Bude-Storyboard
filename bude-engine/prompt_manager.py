class PromptManager:

    def build(self,category,input_text):

        templates={
            'story':'Create a detailed story from this idea:',
            'character':'Create a complete character profile from this idea:',
            'world':'Create a detailed world from this idea:'
        }

        return templates.get(category,'Create content:')+' '+input_text
