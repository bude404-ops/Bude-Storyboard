from version_manager import VersionManager

class BudEEngine:

    def __init__(self):
        self.version='0.1.0'
        self.updater=VersionManager()

    def start(self):
        print('BudE StoryBoard AI Engine Online')
        print('Version:',self.version)


if __name__=='__main__':
    engine=BudEEngine()
    engine.start()