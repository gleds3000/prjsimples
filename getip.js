//Node.js 6.5                                         
 //Plain Javascript and Node.js is supported
// html/css is not supported here


var os = require('os');
var maquina = os.hostname();


module.exports = os.userInfo || function () {
	if (process.platform === 'win32') {
		return {
			uid: -1,
			gid: -1,
			username: username.sync(),
			homedir: osHomedir(),
			shell: null
		};
	}

	var res = passwdUser.sync(process.getuid());

	return {
		uid: res.uid,
		gid: res.gid,
		username: res.username,
		homedir: res.homedir,
		shell: res.shell
	};
};


console.log("Olá, Gledson , Conectado no "+ maquina)
'use strict';
//var os = require('os');
var ifaces = os.networkInterfaces();
Object.keys(ifaces).forEach(
        function (ifname) {
                 var alias = 0;
                 ifaces[ifname].forEach(
                 function (iface) {
                 	if ('IPv4' !== iface.family || iface.internal !== false) {
                         // se estive sem placa de rede ou nao tiver ip nao retorna nada                                                  
				return;
                        }                                                      
			if (alias >= 1) {                                                   
				// retornar todas as interfaces ipv4                                                                  
				console.log(ifname + ':' + alias, iface.address);
			} else {
			// Quando somente tiver ipv4 
  				console.log(ifname, iface.address);
			}
			++alias;
		});
	});
//Saida nesse estilo
 // en0 192.168.1.101
 //// eth0 10.0.0.101
