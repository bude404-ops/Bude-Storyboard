from ai_engine import AIEngine

engine=AIEngine()


def route_request(prompt,category):
    return engine.generate(prompt,category)
