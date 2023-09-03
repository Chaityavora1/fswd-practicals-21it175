const fs = require('fs');
const readline = require('readline');
const path = require('path');
const { promisify } = require('util');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);
async function createBackup() {
  try {
    rl.question('Enter "backup" or "restore": ', async (action) => {
      if (action === 'backup') {
        const sourceDir = 'files-to-backup';
        const backupDir = 'backup';
        if (!fs.existsSync(backupDir)) {
          fs.mkdirSync(backupDir);
        }
        const files = await readdir(sourceDir);
        for (const file of files) {
          const sourceFile = path.join(sourceDir, file);
          const backupFile = path.join(backupDir, file);
          await copyFile(sourceFile, backupFile);
          console.log(`Backup: ${sourceFile} -> ${backupFile}`);
        }
        console.log('Backup completed.');
      } else if (action === 'restore') {
        const backupDir = 'backup';
        const restoreDir = 'restored-files';
        if (!fs.existsSync(restoreDir)) {
          fs.mkdirSync(restoreDir);
        }
        const files = await readdir(backupDir);
        for (const file of files) {
          const backupFile = path.join(backupDir, file);
          const restoreFile = path.join(restoreDir, file);
          await copyFile(backupFile, restoreFile);
          console.log(`Restore: ${backupFile} -> ${restoreFile}`);
        }


        console.log('Restore completed.');
      } else {
        console.log('Invalid action. Please enter "backup" or "restore".');
      }      rl.close();
    });
  } catch (error) {
    console.error('An error occurred:', error);
    rl.close();
  }
}
createBackup();
