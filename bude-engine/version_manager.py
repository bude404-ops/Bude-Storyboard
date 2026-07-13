class VersionManager:

    def __init__(self):
        self.current_version='0.1.0'

    def check_updates(self):
        return 'No updates available'

    def apply_update(self,update):
        print('Applying update:',update)