const command = require('commander')
const inquirer = require('inquirer')
const log = require('log')
const path = require('path')
const ejs = require('ejs')
const fs = require('fs-extra')
const ora = require('ora')
const YAML = require('yaml')
const utils = require('./until')
const spinner = new ora({
    discardStdin: false,
    text: 'start init...',
})
const first_step = require(path.join(__dirname, './step'))

async function create (promptList, dir) {
    return await inquirer.prompt(promptList)
}


module.exports = function () {
    let program = new command.Command()
    program.version('0.0.0')

    // 获取 help
    program.on('-h,--help', function(){
        console.log('Examples:');
        console.log('  $ custom-help --help');
        console.log('  $ custom-help -h');
    })

    program
    .command('add')
    .action((project) => {
        
    })

    program
    .command('create <project>')
    .action((project) => {
        spinner.text = 'start init...'
        spinner.start()
        let defaultPath = path.join(__dirname, './setting/default.yml')
        const file = fs.readFileSync(defaultPath, 'utf8')
        let setting = YAML.parse(file)
        console.log(setting)
        setting.step.map((ele) => {
            console.log(ele)
        })
        // create([first_step],process.argv[3]).then((answer) => {
        //     console.log(answer)
        //     utils.init(`${process.cwd()}/${dir}`).then(suc => {
        //         spinner.text = 'install '
        //         console.timeEnd(' timed: ')
        //         console.time(' timed: ')
  
        //         utils.install(`${process.cwd()}/${dir}`).then(
        //           su => {
        //             console.timeEnd(' timed: ')
        //             spinner.text = 'install success'
        //             spinner.succeed()
        //         }, er => {
        //           console.log(er)
        //         })
                
        //     }, err => {
        //         console.log('create template error')
        //         console.log(err)
        //     })
        // })
    })

    program.parse(process.argv)
    return program
}