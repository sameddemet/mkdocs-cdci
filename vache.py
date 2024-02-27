import cowsay
import random
import sys


def parler_de_vache():
    phrases = [
        "Les vaches sont d'excellentes amies, elles vous écoutent toujours !",
        "Pourquoi les vaches ne peuvent-elles pas être secrètes ? Parce qu'elles laissent toujours des empreintes !",
        "Quel est le plat préféré d'une vache ? L'herbe à la menthe !",
        "Comment appelez-vous une vache qui danse ? Une vache-laitière !",
        "Pourquoi les vaches ne peuvent-elles pas utiliser un ordinateur ? Parce qu'elles ont du mal à saisir la souris !",
    ]
    return random.choice(phrases)


def ecrire_fichier(nom_fichier, texte):
    """ecrire le print cowsay dans un fichier.txt"""
    with open(nom_fichier, "w") as f:
        # We redirect the 'sys.stdout' command towards the descriptor file
        sys.stdout = f
        cowsay.cow(texte)
        # We reset the 'sys.stdout' command
        sys.stdout = sys.__stdout__


if __name__ == "__main__":
    message_vache = parler_de_vache()
    ecrire_fichier("paroles_vache.txt", message_vache)
