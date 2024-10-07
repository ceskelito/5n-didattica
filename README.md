# 5n-didattica
Un archivio del materiale didattico della classe 5n serale. ITIS Fermi (RM) 2024/25

Istruzioni per collegare l'archivio con il visualizzatore Obsidian:

• Prerequisiti:
- Account GitHub
- Git installato sul computer (non serve se si è su smartphone)

• Installare Obsidian -> https://obsidian.md/download
• Creare un nuovo vault Obsidian di nome "5n Didattica" (consigliato)
• Creare la cartella 5n all'interno del vault di Obsidian
• Installare il plugin "Folders to Graph" -> obsidian://show-plugin?id=folders2graph
• Installare il plugin "Git" -> obsidian://show-plugin?id=obsidian-git
• Configurare il plugin "Git" seguendo questo tutorial -> https://forum.obsidian.md/t/the-easiest-way-to-setup-obsidian-git-to-backup-notes/51429


• Creare un nuovo branch di della repository git e chiamarlo con il proprio cognome.

Scegliere uno dei seguenti metodi:

-Da cmd:
Andare nella cartella locale della repository, che coinciderà con quella del Vault di Obsidian in cui avete clonato la repo, aprire il cmd, e  digitare i seguenti comandi:
$ git branch -b {cognome}
$ git push --set-upstream origin {cognome}

-Da Obsidian:
Aprire la finestra dei comandi (ctrl + p da pc; tre barrette in basso a destra e "Open command palette" da cell) e eseguire in ordine:
"Git : create new branch", digitare il nome del branch (Il proprio cognome)
"Git : switch branch", digitare il nome del branch (Il proprio cognome)
"Git : set upstream branch", selezionare "Origin" e poi digitare il nome del branch (il proprio cognome)

•Su Obsidian selezionare la visualizzazione "Graph", cliccare sulle impostazioni e spuntare "Attachments" e "Orphans"

Ora dovreste essere in grado di visualizzare correttamente tutti i file presenti nella repository git, compresi gli allegati

Credo che non serva spiegare anche come utilizzare Obsidian per caricare i file su git, il plugin è abbastanza semplice e chiaro.
Ho fatto eseguire il branching così che chiunque possa modificare o caricare nuovi file, anche appunti personali, senza intaccare il ramo Main, condiviso da tutta la classe, e in cui verranno caricati solo file approvati tramite sondaggio.

Spero che questa cosa potrà esserci utile sia nell'organizzazione, collettiva e privata, del materiale di studio, sia nella preparazione all'esame, dato che potremo, grazie a Obsidian, visualizzare effettivamente i collegamenti tra materie.



