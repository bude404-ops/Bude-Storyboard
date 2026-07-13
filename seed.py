import os
import json
from datetime import datetime


BLUEPRINT = "blueprint.json"


def create_folder(path):
    os.makedirs(path, exist_ok=True)



def write_file(path, content, mode="create"):

    folder = os.path.dirname(path)

    if folder:
        create_folder(folder)


    exists = os.path.exists(path)


    # Protected files are never overwritten
    if mode == "protected" and exists:
        print("Protected:", path)
        return


    # Create only if missing
    if mode == "create" and exists:
        print("Skipped existing:", path)
        return


    with open(path, "w", encoding="utf-8") as file:
        file.write(content)


    print("Updated:", path)



def build():

    print("==============================")
    print("BudE Genesis Builder")
    print("==============================")


    with open(
        BLUEPRINT,
        "r",
        encoding="utf-8"
    ) as file:

        blueprint = json.load(file)



    # Create folders

    for folder in blueprint.get("folders", []):

        create_folder(folder)

        print(
            "Folder:",
            folder
        )



    # Create/update files

    for filename, data in blueprint.get("files", {}).items():


        # Support new format
        if isinstance(data, dict):

            content = data.get(
                "content",
                ""
            )

            mode = data.get(
                "mode",
                "create"
            )


        # Support old format
        else:

            content = data
            mode = "create"



        write_file(
            filename,
            content,
            mode
        )



    create_folder("docs")


    with open(
        "docs/build_log.txt",
        "a",
        encoding="utf-8"
    ) as log:

        log.write(
            f"Build completed: {datetime.now()}\n"
        )


    print("==============================")
    print("BudE Build Complete")
    print("==============================")



if __name__ == "__main__":

    build()
