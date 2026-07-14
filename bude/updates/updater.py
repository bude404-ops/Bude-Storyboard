import json
import os
import argparse

def update_system(module_name):
    manifest_path = '.bude/manifests/current.json'
    with open(manifest_path, 'r') as f:
        manifest = json.load(f)

    if module_name not in manifest['modules']:
        print(f"Evolving: Installing {module_name}...")
        os.makedirs(f'packages/{module_name}', exist_ok=True)
        manifest['modules'].append(module_name)
        
        with open(manifest_path, 'w') as f:
            json.dump(manifest, f, indent=4)
        print(f"Update complete: {module_name} added.")
    else:
        print(f"Module '{module_name}' already exists.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--module', required=True)
    args = parser.parse_args()
    update_system(args.module)
