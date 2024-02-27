# challenge-s10-e02-bis

En reprenant le même système que le workflow cowsay-comment.yml :

- préinstallez mkdocs et initialisez dans votre dépôt ses fichiers initialisés (répertoires docs, fichier mkdocs.yml, etc)
- créez un fichier de workflow, par exemple mkdocs-workflow.yml qui lance deux jobs:
    * un job de CI, sur ubuntu-latest, qui builde le site statique, après un checkout, puis upload l'artifact
    * un job de CD, en self-hosted, qui download l'articat et le met à disposition via un serveur Apache/Nginx/Caddy sur votre vm cloud serveur


