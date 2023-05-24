/*

███████╗░█████╗░██╗░░██╗░█████╗░  ██████╗░██████╗░███████╗███╗░░░███╗██╗██╗░░░██╗███╗░░░███╗
██╔════╝██╔══██╗██║░░██║██╔══██╗  ██╔══██╗██╔══██╗██╔════╝████╗░████║██║██║░░░██║████╗░████║
█████╗░░██║░░╚═╝███████║██║░░██║  ██████╔╝██████╔╝█████╗░░██╔████╔██║██║██║░░░██║██╔████╔██║
██╔══╝░░██║░░██╗██╔══██║██║░░██║  ██╔═══╝░██╔══██╗██╔══╝░░██║╚██╔╝██║██║██║░░░██║██║╚██╔╝██║
███████╗╚█████╔╝██║░░██║╚█████╔╝  ██║░░░░░██║░░██║███████╗██║░╚═╝░██║██║╚██████╔╝██║░╚═╝░██║
╚══════╝░╚════╝░╚═╝░░╚═╝░╚════╝░  ╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝╚═╝░╚═════╝░╚═╝░░░░░╚═╝

██████╗░███████╗████████╗░█████╗░░░░░░░██╗░░░██╗░░███╗░░
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗░░░░░░██║░░░██║░████║░░
██████╦╝█████╗░░░░░██║░░░███████║█████╗╚██╗░██╔╝██╔██║░░
██╔══██╗██╔══╝░░░░░██║░░░██╔══██║╚════╝░╚████╔╝░╚═╝██║░░
██████╦╝███████╗░░░██║░░░██║░░██║░░░░░░░░╚██╔╝░░███████╗
╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝░░░░░░░░░╚═╝░░░╚══════╝

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗
╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

██╗████████╗  ██╗░██████╗
██║╚══██╔══╝  ██║██╔════╝
██║░░░██║░░░  ██║╚█████╗░
██║░░░██║░░░  ██║░╚═══██╗
██║░░░██║░░░  ██║██████╔╝
╚═╝░░░╚═╝░░░  ╚═╝╚═════╝░

██████╗░███████╗░█████╗░░█████╗░███╗░░░███╗███╗░░░███╗███████╗███╗░░██╗██████╗░███████╗██████╗░  ████████╗░█████╗░
██╔══██╗██╔════╝██╔══██╗██╔══██╗████╗░████║████╗░████║██╔════╝████╗░██║██╔══██╗██╔════╝██╔══██╗  ╚══██╔══╝██╔══██╗
██████╔╝█████╗░░██║░░╚═╝██║░░██║██╔████╔██║██╔████╔██║█████╗░░██╔██╗██║██║░░██║█████╗░░██║░░██║  ░░░██║░░░██║░░██║
██╔══██╗██╔══╝░░██║░░██╗██║░░██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝░░██║╚████║██║░░██║██╔══╝░░██║░░██║  ░░░██║░░░██║░░██║
██║░░██║███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║██║░╚═╝░██║███████╗██║░╚███║██████╔╝███████╗██████╔╝  ░░░██║░░░╚█████╔╝
╚═╝░░╚═╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚══╝╚═════╝░╚══════╝╚═════╝░  ░░░╚═╝░░░░╚════╝░

███╗░░██╗░█████╗░████████╗  ░█████╗░██╗░░██╗░█████╗░███╗░░██╗░██████╗░███████╗
████╗░██║██╔══██╗╚══██╔══╝  ██╔══██╗██║░░██║██╔══██╗████╗░██║██╔════╝░██╔════╝
██╔██╗██║██║░░██║░░░██║░░░  ██║░░╚═╝███████║███████║██╔██╗██║██║░░██╗░█████╗░░
██║╚████║██║░░██║░░░██║░░░  ██║░░██╗██╔══██║██╔══██║██║╚████║██║░░╚██╗██╔══╝░░
██║░╚███║╚█████╔╝░░░██║░░░  ╚█████╔╝██║░░██║██║░░██║██║░╚███║╚██████╔╝███████╗
╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░  ░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚══════╝

░█████╗░███╗░░██╗██╗░░░██╗████████╗██╗░░██╗██╗███╗░░██╗░██████╗░  ██╗███╗░░██╗
██╔══██╗████╗░██║╚██╗░██╔╝╚══██╔══╝██║░░██║██║████╗░██║██╔════╝░  ██║████╗░██║
███████║██╔██╗██║░╚████╔╝░░░░██║░░░███████║██║██╔██╗██║██║░░██╗░  ██║██╔██╗██║
██╔══██║██║╚████║░░╚██╔╝░░░░░██║░░░██╔══██║██║██║╚████║██║░░╚██╗  ██║██║╚████║
██║░░██║██║░╚███║░░░██║░░░░░░██║░░░██║░░██║██║██║░╚███║╚██████╔╝  ██║██║░╚███║
╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚═╝░░╚══╝░╚═════╝░  ╚═╝╚═╝░░╚══╝

████████╗██╗░░██╗██╗░██████╗  ███████╗██╗██╗░░░░░███████╗
╚══██╔══╝██║░░██║██║██╔════╝  ██╔════╝██║██║░░░░░██╔════╝
░░░██║░░░███████║██║╚█████╗░  █████╗░░██║██║░░░░░█████╗░░
░░░██║░░░██╔══██║██║░╚═══██╗  ██╔══╝░░██║██║░░░░░██╔══╝░░
░░░██║░░░██║░░██║██║██████╔╝  ██║░░░░░██║███████╗███████╗
░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚═════╝░  ╚═╝░░░░░╚═╝╚══════╝╚══════╝

██╗░░░██╗███╗░░██╗██╗░░░░░███████╗░██████╗░██████╗  ██╗░░░██╗░█████╗░██╗░░░██╗  ██╗░░██╗███╗░░██╗░█████╗░░██╗░░░░░░░██╗
██║░░░██║████╗░██║██║░░░░░██╔════╝██╔════╝██╔════╝  ╚██╗░██╔╝██╔══██╗██║░░░██║  ██║░██╔╝████╗░██║██╔══██╗░██║░░██╗░░██║
██║░░░██║██╔██╗██║██║░░░░░█████╗░░╚█████╗░╚█████╗░  ░╚████╔╝░██║░░██║██║░░░██║  █████═╝░██╔██╗██║██║░░██║░╚██╗████╗██╔╝
██║░░░██║██║╚████║██║░░░░░██╔══╝░░░╚═══██╗░╚═══██╗  ░░╚██╔╝░░██║░░██║██║░░░██║  ██╔═██╗░██║╚████║██║░░██║░░████╔═████║░
╚██████╔╝██║░╚███║███████╗███████╗██████╔╝██████╔╝  ░░░██║░░░╚█████╔╝╚██████╔╝  ██║░╚██╗██║░╚███║╚█████╔╝░░╚██╔╝░╚██╔╝░
░╚═════╝░╚═╝░░╚══╝╚══════╝╚══════╝╚═════╝░╚═════╝░  ░░░╚═╝░░░░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░╚═╝░░

░██╗░░░░░░░██╗██╗░░██╗░█████╗░████████╗  ██╗░░░██╗░█████╗░██╗░░░██╗  ░█████╗░██████╗░███████╗
░██║░░██╗░░██║██║░░██║██╔══██╗╚══██╔══╝  ╚██╗░██╔╝██╔══██╗██║░░░██║  ██╔══██╗██╔══██╗██╔════╝
░╚██╗████╗██╔╝███████║███████║░░░██║░░░  ░╚████╔╝░██║░░██║██║░░░██║  ███████║██████╔╝█████╗░░
░░████╔═████║░██╔══██║██╔══██║░░░██║░░░  ░░╚██╔╝░░██║░░██║██║░░░██║  ██╔══██║██╔══██╗██╔══╝░░
░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║░░░██║░░░  ░░░██║░░░╚█████╔╝╚██████╔╝  ██║░░██║██║░░██║███████╗
░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░  ░░░╚═╝░░░░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝

██████╗░░█████╗░██╗███╗░░██╗░██████╗░░░░
██╔══██╗██╔══██╗██║████╗░██║██╔════╝░░░░
██║░░██║██║░░██║██║██╔██╗██║██║░░██╗░░░░
██║░░██║██║░░██║██║██║╚████║██║░░╚██╗░░░
██████╔╝╚█████╔╝██║██║░╚███║╚██████╔╝██╗
╚═════╝░░╚════╝░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗
╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

██╗███████╗  ██╗░░░██╗░█████╗░██╗░░░██╗  ░█████╗░██╗░░██╗░█████╗░███╗░░██╗░██████╗░███████╗
██║██╔════╝  ╚██╗░██╔╝██╔══██╗██║░░░██║  ██╔══██╗██║░░██║██╔══██╗████╗░██║██╔════╝░██╔════╝
██║█████╗░░  ░╚████╔╝░██║░░██║██║░░░██║  ██║░░╚═╝███████║███████║██╔██╗██║██║░░██╗░█████╗░░
██║██╔══╝░░  ░░╚██╔╝░░██║░░██║██║░░░██║  ██║░░██╗██╔══██║██╔══██║██║╚████║██║░░╚██╗██╔══╝░░
██║██║░░░░░  ░░░██║░░░╚█████╔╝╚██████╔╝  ╚█████╔╝██║░░██║██║░░██║██║░╚███║╚██████╔╝███████╗
╚═╝╚═╝░░░░░  ░░░╚═╝░░░░╚════╝░░╚═════╝░  ░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚══════╝

░█████╗░███╗░░██╗██╗░░░██╗████████╗██╗░░██╗██╗███╗░░██╗░██████╗░  ██╗███╗░░██╗
██╔══██╗████╗░██║╚██╗░██╔╝╚══██╔══╝██║░░██║██║████╗░██║██╔════╝░  ██║████╗░██║
███████║██╔██╗██║░╚████╔╝░░░░██║░░░███████║██║██╔██╗██║██║░░██╗░  ██║██╔██╗██║
██╔══██║██║╚████║░░╚██╔╝░░░░░██║░░░██╔══██║██║██║╚████║██║░░╚██╗  ██║██║╚████║
██║░░██║██║░╚███║░░░██║░░░░░░██║░░░██║░░██║██║██║░╚███║╚██████╔╝  ██║██║░╚███║
╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚═╝░░╚══╝░╚═════╝░  ╚═╝╚═╝░░╚══╝

████████╗██╗░░██╗██╗░██████╗  ███████╗██╗██╗░░░░░███████╗░░░  ░█████╗░██╗░░░██╗████████╗░█████╗░
╚══██╔══╝██║░░██║██║██╔════╝  ██╔════╝██║██║░░░░░██╔════╝░░░  ██╔══██╗██║░░░██║╚══██╔══╝██╔══██╗
░░░██║░░░███████║██║╚█████╗░  █████╗░░██║██║░░░░░█████╗░░░░░  ███████║██║░░░██║░░░██║░░░██║░░██║
░░░██║░░░██╔══██║██║░╚═══██╗  ██╔══╝░░██║██║░░░░░██╔══╝░░██╗  ██╔══██║██║░░░██║░░░██║░░░██║░░██║
░░░██║░░░██║░░██║██║██████╔╝  ██║░░░░░██║███████╗███████╗╚█║  ██║░░██║╚██████╔╝░░░██║░░░╚█████╔╝
░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚═════╝░  ╚═╝░░░░░╚═╝╚══════╝╚══════╝░╚╝  ╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░░╚════╝░

██╗░░░██╗██████╗░██████╗░░█████╗░████████╗███████╗░██████╗  ░██╗░░░░░░░██╗██╗██╗░░░░░██╗░░░░░
██║░░░██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔════╝  ░██║░░██╗░░██║██║██║░░░░░██║░░░░░
██║░░░██║██████╔╝██║░░██║███████║░░░██║░░░█████╗░░╚█████╗░  ░╚██╗████╗██╔╝██║██║░░░░░██║░░░░░
██║░░░██║██╔═══╝░██║░░██║██╔══██║░░░██║░░░██╔══╝░░░╚═══██╗  ░░████╔═████║░██║██║░░░░░██║░░░░░
╚██████╔╝██║░░░░░██████╔╝██║░░██║░░░██║░░░███████╗██████╔╝  ░░╚██╔╝░╚██╔╝░██║███████╗███████╗
░╚═════╝░╚═╝░░░░░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═════╝░  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝

░██████╗██╗░░██╗██╗░░░██╗████████╗  ░█████╗░███████╗███████╗░░░  ████████╗░█████╗░
██╔════╝██║░░██║██║░░░██║╚══██╔══╝  ██╔══██╗██╔════╝██╔════╝░░░  ╚══██╔══╝██╔══██╗
╚█████╗░███████║██║░░░██║░░░██║░░░  ██║░░██║█████╗░░█████╗░░░░░  ░░░██║░░░██║░░██║
░╚═══██╗██╔══██║██║░░░██║░░░██║░░░  ██║░░██║██╔══╝░░██╔══╝░░░░░  ░░░██║░░░██║░░██║
██████╔╝██║░░██║╚██████╔╝░░░██║░░░  ╚█████╔╝██║░░░░░██║░░░░░██╗  ░░░██║░░░╚█████╔╝
╚═════╝░╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░  ░╚════╝░╚═╝░░░░░╚═╝░░░░░╚═╝  ░░░╚═╝░░░░╚════╝░

████████╗██╗░░░██╗██████╗░███╗░░██╗  ████████╗██╗░░██╗███████╗███╗░░░███╗  ██████╗░░█████╗░░█████╗░██╗░░██╗
╚══██╔══╝██║░░░██║██╔══██╗████╗░██║  ╚══██╔══╝██║░░██║██╔════╝████╗░████║  ██╔══██╗██╔══██╗██╔══██╗██║░██╔╝
░░░██║░░░██║░░░██║██████╔╝██╔██╗██║  ░░░██║░░░███████║█████╗░░██╔████╔██║  ██████╦╝███████║██║░░╚═╝█████═╝░
░░░██║░░░██║░░░██║██╔══██╗██║╚████║  ░░░██║░░░██╔══██║██╔══╝░░██║╚██╔╝██║  ██╔══██╗██╔══██║██║░░██╗██╔═██╗░
░░░██║░░░╚██████╔╝██║░░██║██║░╚███║  ░░░██║░░░██║░░██║███████╗██║░╚═╝░██║  ██████╦╝██║░░██║╚█████╔╝██║░╚██╗
░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝  ╚═════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝

░█████╗░███╗░░██╗  ██╗░░░██╗░█████╗░██╗░░░██╗  ███╗░░░███╗██╗░░░██╗░██████╗████████╗  ░██████╗░░█████╗░
██╔══██╗████╗░██║  ╚██╗░██╔╝██╔══██╗██║░░░██║  ████╗░████║██║░░░██║██╔════╝╚══██╔══╝  ██╔════╝░██╔══██╗
██║░░██║██╔██╗██║  ░╚████╔╝░██║░░██║██║░░░██║  ██╔████╔██║██║░░░██║╚█████╗░░░░██║░░░  ██║░░██╗░██║░░██║
██║░░██║██║╚████║  ░░╚██╔╝░░██║░░██║██║░░░██║  ██║╚██╔╝██║██║░░░██║░╚═══██╗░░░██║░░░  ██║░░╚██╗██║░░██║
╚█████╔╝██║░╚███║  ░░░██║░░░╚█████╔╝╚██████╔╝  ██║░╚═╝░██║╚██████╔╝██████╔╝░░░██║░░░  ╚██████╔╝╚█████╔╝
░╚════╝░╚═╝░░╚══╝  ░░░╚═╝░░░░╚════╝░░╚═════╝░  ╚═╝░░░░░╚═╝░╚═════╝░╚═════╝░░░░╚═╝░░░  ░╚═════╝░░╚════╝░

████████╗░█████╗░  ████████╗██╗░░██╗██╗░██████╗
╚══██╔══╝██╔══██╗  ╚══██╔══╝██║░░██║██║██╔════╝
░░░██║░░░██║░░██║  ░░░██║░░░███████║██║╚█████╗░
░░░██║░░░██║░░██║  ░░░██║░░░██╔══██║██║░╚═══██╗
░░░██║░░░╚█████╔╝  ░░░██║░░░██║░░██║██║██████╔╝
░░░╚═╝░░░░╚════╝░  ░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚═════╝░

░██████╗░█████╗░██████╗░██╗██████╗░████████╗██╗░██████╗
██╔════╝██╔══██╗██╔══██╗██║██╔══██╗╚══██╔══╝╚█║██╔════╝
╚█████╗░██║░░╚═╝██████╔╝██║██████╔╝░░░██║░░░░╚╝╚█████╗░
░╚═══██╗██║░░██╗██╔══██╗██║██╔═══╝░░░░██║░░░░░░░╚═══██╗
██████╔╝╚█████╔╝██║░░██║██║██║░░░░░░░░██║░░░░░░██████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░░░░░░░╚═╝░░░░░░╚═════╝░

░██████╗███████╗████████╗████████╗██╗███╗░░██╗░██████╗░░██████╗  ░█████╗░███╗░░██╗██████╗░
██╔════╝██╔════╝╚══██╔══╝╚══██╔══╝██║████╗░██║██╔════╝░██╔════╝  ██╔══██╗████╗░██║██╔══██╗
╚█████╗░█████╗░░░░░██║░░░░░░██║░░░██║██╔██╗██║██║░░██╗░╚█████╗░  ███████║██╔██╗██║██║░░██║
░╚═══██╗██╔══╝░░░░░██║░░░░░░██║░░░██║██║╚████║██║░░╚██╗░╚═══██╗  ██╔══██║██║╚████║██║░░██║
██████╔╝███████╗░░░██║░░░░░░██║░░░██║██║░╚███║╚██████╔╝██████╔╝  ██║░░██║██║░╚███║██████╔╝
╚═════╝░╚══════╝░░░╚═╝░░░░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═════╝░  ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░

████████╗██╗░░░██╗██████╗░███╗░░██╗  ░█████╗░███╗░░██╗  ██╗██╗░█████╗░██╗░░██╗███████╗░█████╗░██╗░░██╗
╚══██╔══╝██║░░░██║██╔══██╗████╗░██║  ██╔══██╗████╗░██║  ╚█║╚█║██╔══██╗██║░░██║██╔════╝██╔══██╗██║░██╔╝
░░░██║░░░██║░░░██║██████╔╝██╔██╗██║  ██║░░██║██╔██╗██║  ░╚╝░╚╝██║░░╚═╝███████║█████╗░░██║░░╚═╝█████═╝░
░░░██║░░░██║░░░██║██╔══██╗██║╚████║  ██║░░██║██║╚████║  ░░░░░░██║░░██╗██╔══██║██╔══╝░░██║░░██╗██╔═██╗░
░░░██║░░░╚██████╔╝██║░░██║██║░╚███║  ╚█████╔╝██║░╚███║  ░░░░░░╚█████╔╝██║░░██║███████╗╚█████╔╝██║░╚██╗
░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝  ░╚════╝░╚═╝░░╚══╝  ░░░░░░░╚════╝░╚═╝░░╚═╝╚══════╝░╚════╝░╚═╝░░╚═╝

███████╗░█████╗░██████╗░  ██╗░░░██╗██████╗░██████╗░░█████╗░████████╗███████╗░██████╗██╗██╗
██╔════╝██╔══██╗██╔══██╗  ██║░░░██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔════╝╚█║╚█║
█████╗░░██║░░██║██████╔╝  ██║░░░██║██████╔╝██║░░██║███████║░░░██║░░░█████╗░░╚█████╗░░╚╝░╚╝
██╔══╝░░██║░░██║██╔══██╗  ██║░░░██║██╔═══╝░██║░░██║██╔══██║░░░██║░░░██╔══╝░░░╚═══██╗░░░░░░
██║░░░░░╚█████╔╝██║░░██║  ╚██████╔╝██║░░░░░██████╔╝██║░░██║░░░██║░░░███████╗██████╔╝░░░░░░
╚═╝░░░░░░╚════╝░╚═╝░░╚═╝  ░╚═════╝░╚═╝░░░░░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═════╝░░░░░░░
*/


// ==UserScript==
// @name         Echo Premium
// @namespace    https://dj13423.repl.co
// @version      Beta-v1
// @description  Echo Premium
// @author       DJ
// @match        https://snths.echo-ntn.org/*
// @icon         https://api.agilixbuzz.com/dlap.ashx?cmd=getresource&entityid=//snths&path=public/shadow/app/buzz/echo-icon42x42.png
// @grant        GM_addStyle
// @updateURL    https://github.com/DJ13423/echo-premium/raw/main/echo-premium.user.js
// @downloadURL  https://github.com/DJ13423/echo-premium/raw/main/echo-premium.user.js
// @run-at       document-start
// ==/UserScript==


(function () {
    'use strict';


    const scriptVersion = 'Beta-v1'


    function $(selector) { return document.querySelectorAll(selector) }


    console.log('Loading injector...')


    async function enableDarkModeIfUserIsNew() {
        const userNotNew = localStorage.getItem('userHasUsedEchoPremiumBefore')
        if (userNotNew == undefined) {
            const sessionData = JSON.parse(localStorage.getItem('session'))
            const buzzTheme = await (await fetch(`https://api.agilixbuzz.com/cmd/getresource?_token=${sessionData.token}&entityid=${sessionData.user.id}&path=Assets%2FBuzzTheme.json`, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site"
                },
                "referrer": "https://snths.echo-ntn.org/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "method": "GET",
                "mode": "cors",
                "credentials": "omit"
            })).json()
            await fetch(`https://api.agilixbuzz.com/cmd/putresource?_token=${sessionData.token}&entityid=${sessionData.user.id}&path=Assets%2FBuzzTheme.json`, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site"
                },
                "referrer": "https://snths.echo-ntn.org/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": `{"theme":"Purple","colorScheme":"dark","ActivityStreamLastRead":"${buzzTheme.ActivityStreamLastRead}"}`,
                "method": "POST",
                "mode": "cors",
                "credentials": "omit"
            })
            localStorage.setItem('userHasUsedEchoPremiumBefore', true)
        }
    }
    enableDarkModeIfUserIsNew()


    let isInTeacherApp = true

    setInterval(() => {
        if (window.location.pathname.split('/')[1] == 'teacher' || window.location.pathname.split('/')[2] == 'premium-settings-t')
            isInTeacherApp = true
        else
            isInTeacherApp = false
    }, 100)


    document.echoPremium = {}


    document.echoPremium.saveSettings = () => {
        localStorage.setItem('echo-premium-enabled', $('#echoPremiumEnabledCheckbox')[0].checked)
        localStorage.setItem('background-image', document.querySelector('#background-image-input').value)
    }

    document.echoPremium.$ = $


    ////////////// Premium Settings Page //////////////////
    let settingsHaveBeenLoaded = false
    setInterval(() => {
        if (!settingsHaveBeenLoaded && (window.location.pathname == '/student/premium-settings-t' || window.location.pathname == '/student/premium-settings')) {
            const toolbar = $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > mat-toolbar')[0]
            if (!toolbar) return
            toolbar.style.setProperty("visibility", "hidden", "important")
            const body = $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div')[0]
            if (!body) return
            const echoPremiumEnabled = localStorage.getItem('echo-premium-enabled')
            const backgroundImage = localStorage.getItem('background-image')
            const mainDiv = document.createElement('div')
            const backgroundImageURLHeader = document.createElement('h2')
            const backgroundURLInputBox = document.createElement('input')
            body.innerHTML = `
    <div>
        <h1>Settings</h1>
        <label>Enable Echo Premium</label>
        <input type="checkbox" id="echoPremiumEnabledCheckbox" ${echoPremiumEnabled == 'false' ? '' : 'checked'}>
        <br>
        <br>
        <label>Background image URL:</label>
        <input type="text" id="background-image-input" name="fname" value="${backgroundImage ? backgroundImage : ''}" style="height: 30px; width: 50%;">
        <br>
        <br>
        <p>Background image presets:</p>
        <br>
        <br>
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-03-13%2022.13.37%20-%20A%20beautiful%20city%20with%20amazing%20lighting.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-03-13%2022.13.37%20-%20A%20beautiful%20city%20with%20amazing%20lighting.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-03-15%2009.40.01%20-%20a%20space%20background%20showing%20an%20earth%20like%20planet.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://github.com/DJ13423/echo-premium/raw/main/background-images/DALL%C2%B7E%202023-03-15%2009.40.01%20-%20a%20space%20background%20showing%20an%20earth%20like%20planet%20.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-03-15%2011.01.46%20-%20a%20minecraft%20sunset%20but%20with%20shaders.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-03-15%2011.01.46%20-%20a%20minecraft%20sunset%20but%20with%20shaders.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-04-19%2012.36.35%20-%20A%20Sunset.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-04-19%2012.36.35%20-%20A%20Sunset.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-05-12%2011.11.39%20-%20Mysterious%20Planet_%20An%20otherworldly%20landscape%20with%20strange%20land%20formations%20and%20unusual%20flora.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-05-12%2011.11.39%20-%20Mysterious%20Planet_%20An%20otherworldly%20landscape%20with%20strange%20land%20formations%20and%20unusual%20flora.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-05-12%2011.11.46%20-%20Artistic%20Painting_%20A%20visually%20captivating%20artwork%20with%20unique%20brushstrokes%20and%20vibrant%20colors.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-05-12%2011.11.46%20-%20Artistic%20Painting_%20A%20visually%20captivating%20artwork%20with%20unique%20brushstrokes%20and%20vibrant%20colors.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-05-12%2011.11.50%20-%20Stellar%20Night_%20A%20breathtaking%20view%20of%20stars%20scattered%20across%20a%20dark%20night%20sky.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-05-12%2011.11.50%20-%20Stellar%20Night_%20A%20breathtaking%20view%20of%20stars%20scattered%20across%20a%20dark%20night%20sky.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-05-12%2011.11.54%20-%20Galactic%20Marvel_%20An%20awe-inspiring%20image%20showcasing%20the%20vastness%20of%20a%20galaxy%20with%20swirling%20nebulas%20and%20distant%20stars.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-05-12%2011.11.54%20-%20Galactic%20Marvel_%20An%20awe-inspiring%20image%20showcasing%20the%20vastness%20of%20a%20galaxy%20with%20swirling%20nebulas%20and%20distant%20stars.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-05-12%2011.11.58%20-%20Tropical%20Paradise_%20A%20tropical%20beach%20with%20palm%20trees%2C%20white%20sand%2C%20crystal-clear%20water%2C%20and%20colorful%20umbrellas.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-05-12%2011.11.58%20-%20Tropical%20Paradise_%20A%20tropical%20beach%20with%20palm%20trees%2C%20white%20sand%2C%20crystal-clear%20water%2C%20and%20colorful%20umbrellas.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-05-12%2011.12.01%20-%20Haunted%20Mansion_%20An%20eerie%20mansion%20with%20spooky%20architecture%2C%20overgrown%20vines%2C%20and%20a%20full%20moon%20casting%20shadows.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-05-12%2011.12.01%20-%20Haunted%20Mansion_%20An%20eerie%20mansion%20with%20spooky%20architecture%2C%20overgrown%20vines%2C%20and%20a%20full%20moon%20casting%20shadows.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-05-12%2011.12.05%20-%20Dreamy%20Meadow_%20A%20peaceful%20meadow%20with%20blooming%20flowers%2C%20gentle%20rolling%20hills%2C%20and%20a%20clear%20blue%20sky%20dotted%20with%20fluffy%20clouds.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-05-12%2011.12.05%20-%20Dreamy%20Meadow_%20A%20peaceful%20meadow%20with%20blooming%20flowers%2C%20gentle%20rolling%20hills%2C%20and%20a%20clear%20blue%20sky%20dotted%20with%20fluffy%20clouds.png'">
        <img src="https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-image-thumbnails/THUMBNAIL-DALL%C2%B7E%202023-05-12%2011.12.08%20-%20Cyberpunk%20Cityscape_%20A%20futuristic%20city%20with%20towering%20skyscrapers%2C%20neon%20lights%2C%20flying%20cars%2C%20and%20holographic%20advertisements.png" class="background-image-preset-thumbnail" onclick="document.echoPremium.$('#background-image-input')[0].value = 'https://raw.githubusercontent.com/DJ13423/echo-premium/main/background-images/DALL%C2%B7E%202023-05-12%2011.12.08%20-%20Cyberpunk%20Cityscape_%20A%20futuristic%20city%20with%20towering%20skyscrapers%2C%20neon%20lights%2C%20flying%20cars%2C%20and%20holographic%20advertisements.png'">
        <br>
        <br>
        <button type="button" onclick="document.echoPremium.saveSettings(); window.location.href='/${isInTeacherApp ? 'teacher' : 'student'}/home/courses'" style="border-color: black; border-radius: 5px; font-size: 20px; background-color: #181;">Save & exit</button>
        <button type="button" onclick="window.location.href='/${isInTeacherApp ? 'teacher' : 'student'}/home/courses'" style="border-color: black; border-radius: 5px; font-size: 20px; background-color: #811;">Exit without saving</button>
        <br>
        <br>
        <hr>
        <br>
        <h1>About</h1>
        <h5>Echo Premium version ${scriptVersion}</h5>
        <h3>Credits:</h3>
        <p>Creator: (DJ) Daniel Bonner</p>
        <p>Early Alpha Testers & Feedback providers:</p>
        <ul>
            <li>Mekhilyn Durr</li>
            <li>Dylan Gilbert</li>
            <li>Vicente Rojo-Cudabac</li>
        </ul>
    </div>`
            settingsHaveBeenLoaded = true
        }
    }, 2000)


    function tryAddEchoPremiumButton() {
        if ($('.echo-premium-settings-sidebar-navmenu-button').length == 0) {
            const buttonToClone = $(isInTeacherApp ? 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a:nth-child(2)' : 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a:nth-child(2)')[0]
            if (!buttonToClone) return
            const clonedButtonElement = buttonToClone.cloneNode(true)
            if (!clonedButtonElement) return
            clonedButtonElement?.classList.add('echo-premium-settings-sidebar-navmenu-button')
            clonedButtonElement.href = `student/premium-settings${isInTeacherApp ? '-t' : ''}`
            const buttonToPutUnder = $(isInTeacherApp ? 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu' : 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu')[0]
            if (!buttonToPutUnder) return
            buttonToPutUnder.lastChild.after(clonedButtonElement)
            const iconElement = $(isInTeacherApp ? 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a.mat-list-item.mat-focus-indicator.mat-tooltip-trigger.top-menu-entry.ng-star-inserted.echo-premium-settings-sidebar-navmenu-button > span > mat-icon' : 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a.mat-list-item.mat-focus-indicator.mat-tooltip-trigger.top-main-entry.ng-star-inserted.echo-premium-settings-sidebar-navmenu-button > span > mat-icon')[0]
            if (!iconElement) return
            iconElement.innerHTML = 'settings'
            const buttonDescription = $(isInTeacherApp ? 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a.mat-list-item.mat-focus-indicator.mat-tooltip-trigger.top-menu-entry.ng-star-inserted.echo-premium-settings-sidebar-navmenu-button > span > span.description' : 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a.mat-list-item.mat-focus-indicator.mat-tooltip-trigger.top-main-entry.ng-star-inserted.echo-premium-settings-sidebar-navmenu-button > span > span.description')[0]
            if (!buttonDescription) return
            buttonDescription.innerHTML = 'Premium Settings'
        }
        if ($('.echo-premium-settings-sidebar-navmenu-button > span > span.description:not(.sr-only)').length == 0) {
            const span = document.createElement('span')
            $('.echo-premium-settings-sidebar-navmenu-button > span')[0].appendChild(span)
            span.outerHTML = '<span _ngcontent-cmk-c475="" class="description">Premium Settings</span>'
        }
    }
    setInterval(() => tryAddEchoPremiumButton(), 2000)


    const echoPremiumEnabled = localStorage.getItem('echo-premium-enabled') ? localStorage.getItem('echo-premium-enabled') : 'true'
    if (echoPremiumEnabled == 'false' && window.location.pathname != '/student/premium-settings') {
        return
    }


    GM_addStyle(`
    /* Circles that show on loading screen */
    body > app-root > svg > circle {
        visibility: hidden;
    }

    /* Splash screen that shows on load */
    body > app-root > svg {
        background-image: url(https://lh5.googleusercontent.com/KMpNXdVXEdLO5TRJ-XfYH2FdcHeda-QbqloLDe5kqLYcD1OxV9hTnoraDhwNM3_SCbs=w2400);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: calc(302px * 2);
        height: calc(49px * 2);
        top: calc(50% - 49px) !important;
        left: calc(50% - 302px) !important;
    }

    /* Background */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-teacher-home-tabs > div.tab-content > app-teacher-home,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-teacher-home-tabs > div.tab-content > app-teacher-dashboard,
    /* T/S */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-to-do,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-stream,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-item-modal > lib-activity-player > mat-drawer-container > mat-drawer-content,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > lib-grade-details > div {
        background-image: url(${localStorage.getItem('background-image')}) !important;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .mat-icon {
       transition: transform 0.3s;
    }

    .mat-icon:hover {
        transform: perspective(10px) translate3d(0px, -4px, 1px);
    }

    /* Student/Teacher buttons after login */
    .mat-raised-button {
        border-radius: 30px !important;
    }

    /* Top navbar header */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content {
        background-image: linear-gradient(180deg, var(--primary-900), 4%, var(--card-layout-background), 18%, var(--card-layout-background)) !important;
    }

    /* Top navbar header */
    .app-dark-theme .mat-toolbar.mat-primary:not(body > app-root > app-before-login > app-login > mat-toolbar),
    .app-dark-theme .app-top-tabs .mat-tab-header {
        background-color: transparent !important;
    }

    /* Side nav menu transparency layer */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav {
        background-color: transparent !important;
    }

    /* Side mav menu */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav.mat-drawer {
        background-image: linear-gradient(90deg, var(--primary-900), 90%, #0000) !important;
        border-radius: 10px !important;
        margin: 10px !important;
        transform: translate3d(-100%, -50%, -100px);
    }

    /* Hide sidenav scroll bar */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div::-webkit-scrollbar {
        display: none;
    }

    /* Individual side nav menu buttons */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a,
    /* T/S */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a {
        border-radius: 10px !important;
        margin: 3px !important;
        background-position: 100% 0%;
        background-size: 200% 100%;
        background-image: linear-gradient(90deg, #419A, 20%, #FFF1, 50%, #FFF1) !important;
        transition: background-position 0.25s !important;
    }
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a:hover,
    /* T/S */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a:hover {
        background-color: unset !important;
        background-position: 0% 0% !important;
    }
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a:focus,
    /* T/S */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div.main-menu.ng-trigger.ng-trigger-navMenu > a:focus {
        background-color: unset !important;
    }

    /* Effect that brightens/darkens the page when you open the sidebar */
    .app-dark-theme .mat-drawer-backdrop.mat-drawer-shown {
        background-color: #0009;
    }

    /* All mat cards */
    mat-card {
        border-radius: 30px !important;
    }

    /* Drop down menu when you click on your profile */
    .mat-menu-panel {
        border-radius: 20px !important;
    }

    /* Card with the date that shows over all the class cards on the home course page */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-teacher-home-tabs > div.tab-content > app-teacher-home > div.home-ct > mat-card,
    /* T/S */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > mat-card {
        border-radius: 30px;
        background-color: #333c;
        border-style: solid;
        border-color: #0006;
    }

    /* Class cards */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-teacher-home-tabs > div.tab-content > app-teacher-home > div.home-ct > div > mat-card,
    /* T/S */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card {
        border-radius: 30px !important;
        background-color: #333C !important;
        transition: background-color 0.5s;
    }
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card:hover {
        background-color: #222C !important;
    }

    /* Class card images */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-teacher-home-tabs > div.tab-content > app-teacher-home > div.home-ct > div > mat-card > div > div.mat-card-image.course-card-image.rounded.ng-star-inserted,
    /* T/S */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card > div > div.mat-card-image.course-card-image.rounded.ng-star-inserted {
        border-radius: 30px 30px 0px 0px !important;
        margin-left: -24px !important;
        margin-top: -16px !important;
    }

    /* Class card color bands */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-teacher-home-tabs > div.tab-content > app-teacher-home > div.home-ct > div > mat-card > div > div.color-band.rounded,
    /* T/S */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card > div > div.color-band.rounded {
        display: none !important;
    }

    /* Grade that shows on the class cards */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card > div > div.detail-ct.ng-star-inserted > div.score-ct {
        opacity: 1;
    }

    /* Class page main card */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card {
        border-radius: 30px;
        border-color: black;
        animation: class-page-main-card 6s infinite linear !important;
    }
    @keyframes class-page-main-card {
        0% { box-shadow: 0px 0px 50px 10px #4195 }
        50% { box-shadow: 0px 0px 50px 10px #419E }
        100% { box-shadow: 0px 0px 50px 10px #4195 }
    }

    /* Color band at the top of the class page main card */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > div:nth-child(1) > div.color-band.rounded {
        margin-right: 40px;
        margin-left: 40px;
        margin-top: 10px;
        border-radius: 10px;
        width: auto;
    }

    /* "Go to today" agenda button */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > div.agendas.ng-star-inserted > span > button {
        border-style: solid;
        border-color: #FFF5;
        border-width: 1px;
    }

    /* Individual activities */
    div > lib-activity-tree > div > mat-tree > mat-tree-node {
        background-color: #FFF1 !important;
        border-radius: 10px !important;
        margin-bottom: 5px !important;
    }

    /* Activity thumbnails */
    div > lib-activity-tree > div > mat-tree > mat-tree-node > a > lib-activity-thumbnail {
        background-color: transparent !important;
    }

    /* Class thumbnail image that shows at the top of the page after you click on a class card */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > div:nth-child(1) > div.top-header > div.course-thumbnail {
        border-radius: 15px !important;
        box-shadow: 0px 0px 20px 5px #AFE9
    }

    /* Mat divider (dividers/<br>'s) */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > mat-divider,
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > div.agendas.ng-star-inserted > mat-divider {
        background-image: linear-gradient(90deg, #0000, grey, #0000);
        height: 1px;
        border-style: none;
    }

    /* Ink bar that shows under activity and to-do list */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-activity > div.buzz-activity > div > app-course-home > mat-drawer-container > mat-drawer-content > div > mat-card > mat-tab-group > mat-tab-header > div > div > mat-ink-bar {
        background-image: linear-gradient(90deg, #424242, var(--primary-default), #424242);
        height: 2px;
    }

    /* Premium settings page main div */
    body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > div {
        width: 100%;
        height: fit-content;
        margin: 100px;
        padding: 30px;
        border-style: solid;
        border-color: black;
        border-radius: 30px;
        animation: premium-settings-main-div 60s infinite linear !important;
    }
    @keyframes premium-settings-main-div {
        0% { box-shadow: 0px 0px 50px 10px rgb(255, 0, 0) }
        9% { box-shadow: 0px 0px 50px 10px rgb(255, 128, 0) }
        18% { box-shadow: 0px 0px 50px 10px rgb(255, 255, 0) }
        27% { box-shadow: 0px 0px 50px 10px rgb(128, 255, 0) }
        36% { box-shadow: 0px 0px 50px 10px rgb(0, 255, 0) }
        45% { box-shadow: 0px 0px 50px 10px rgb(0, 255, 128) }
        54% { box-shadow: 0px 0px 50px 10px rgb(0, 255, 255) }
        63% { box-shadow: 0px 0px 50px 10px rgb(0, 128, 255) }
        72% { box-shadow: 0px 0px 50px 10px rgb(0, 0, 255) }
        81% { box-shadow: 0px 0px 50px 10px rgb(128, 0, 255) }
        90% { box-shadow: 0px 0px 50px 10px rgb(255, 0, 255) }
        100% { box-shadow: 0px 0px 50px 10px rgb(255, 0, 0) }
    }

    .background-image-preset-thumbnail {
        border-style: solid;
        border-color: black;
        border-radius: 10px;
        height: 150px;
        cursor: pointer;
        transition: filter 0.3s;
    }
    .background-image-preset-thumbnail:hover {
        filter: brightness(1.2);
    }
    .background-image-preset-thumbnail:active {
        filter: brightness(1) blur(5px);
    }
    `);


    function tryAddEchoPremiumCreditWatermark() {
        if ($(isInTeacherApp ? 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > p' : 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > p').length == 0) {
            const echoPremiumCreditWatermarkElement = document.createElement('p')
            echoPremiumCreditWatermarkElement.innerHTML = '<a href="https://dj13423.repl.co/" target="_blank">Echo premium by DJ</a>';
            echoPremiumCreditWatermarkElement.style.color = 'white'
            echoPremiumCreditWatermarkElement.style['text-align'] = 'center'
            const dividerElement = $(isInTeacherApp ? 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > mat-divider' : 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > mat-divider')[0];
            if (!dividerElement) return
            dividerElement.after(echoPremiumCreditWatermarkElement)
            echoPremiumCreditWatermarkElement.after(dividerElement.cloneNode(true))
        }
    }
    setInterval(() => tryAddEchoPremiumCreditWatermark(), 2000)


    async function tryAddDarkmodeToggle() {
        if ($(isInTeacherApp ? 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > div > input' : 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > div > input').length == 0) {
            const sessionData = JSON.parse(localStorage.getItem('session'))
            const buzzTheme = await (await fetch(`https://api.agilixbuzz.com/cmd/getresource?_token=${sessionData.token}&entityid=${sessionData.user.id}&path=Assets%2FBuzzTheme.json`, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site"
                },
                "referrer": "https://snths.echo-ntn.org/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "method": "GET",
                "mode": "cors",
                "credentials": "omit"
            })).json()

            const darkModeToggle = document.createElement('div')
            darkModeToggle.innerHTML = `<label>Dark Mode (Recommended unless something isnt clearly visible)</label><input type="checkbox" ${buzzTheme.colorScheme === 'dark' && buzzTheme.theme === 'Purple' ? 'checked' : ''}>`
            darkModeToggle.style.color = 'white'
            darkModeToggle.style['text-align'] = 'center'


            darkModeToggle.onclick = async () => {
                const sessionData = JSON.parse(localStorage.getItem('session'))
                const buzzTheme = await (await fetch(`https://api.agilixbuzz.com/cmd/getresource?_token=${sessionData.token}&entityid=${sessionData.user.id}&path=Assets%2FBuzzTheme.json`, {
                    "headers": {
                        "accept": "application/json",
                        "accept-language": "en-US,en;q=0.9",
                        "content-type": "application/json",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site"
                    },
                    "referrer": "https://snths.echo-ntn.org/",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "method": "GET",
                    "mode": "cors",
                    "credentials": "omit"
                })).json()
                await fetch(`https://api.agilixbuzz.com/cmd/putresource?_token=${sessionData.token}&entityid=${sessionData.user.id}&path=Assets%2FBuzzTheme.json`, {
                    "headers": {
                        "accept": "application/json",
                        "accept-language": "en-US,en;q=0.9",
                        "content-type": "application/json",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site"
                    },
                    "referrer": "https://snths.echo-ntn.org/",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": `{"theme":"Purple","colorScheme":"${buzzTheme.colorScheme === 'dark' ? 'light' : 'dark'}","ActivityStreamLastRead":"${buzzTheme.ActivityStreamLastRead}"}`,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "omit"
                })
                window.location.reload()
            }
            const dividerElement = $(isInTeacherApp ? 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-teacher-nav > mat-nav-list > mat-divider' : 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div:nth-child(2) > app-student-nav > mat-nav-list > mat-divider')[0];
            if (!dividerElement) return
            dividerElement.after(darkModeToggle)
            darkModeToggle.after(dividerElement.cloneNode(true))
        }
    }
    setInterval(() => tryAddDarkmodeToggle(), 2000)


    setInterval(() => {
        const sideMenuLogoImg = $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav > div > div.side-menu-logo-ct > img')[0]
        if (sideMenuLogoImg)
            sideMenuLogoImg.src = 'https://lh5.googleusercontent.com/KMpNXdVXEdLO5TRJ-XfYH2FdcHeda-QbqloLDe5kqLYcD1OxV9hTnoraDhwNM3_SCbs=w2400'
    }, 2000)

    setInterval(() => {
        $(isInTeacherApp ? 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-teacher-home-tabs > div.tab-content > app-teacher-home > div.home-ct > div.grid-ct.ng-star-inserted > mat-card' : 'body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card').forEach(element => {
            //element.style.setProperty("width", "255px", "important")
            //element.style.setProperty("box-sizing", "border-box", "important")
            //element.style.setProperty("border-style", "solid", "important")
            //element.style.setProperty("border-color", element.children.item(0).children.item(1).style['background-color'], "important")
            element.style.setProperty("outline-color", element.children.item(0).children.item(1).style['background-color'], "important")
            element.style.setProperty("outline-style", "solid", "important")
            element.style.setProperty("outline-width", "3px", "important")
        })

        $('body > app-root > app-after-login > div > mat-sidenav-container > mat-sidenav-content > div > app-student-home-tabs > div.tab-content > app-student-courses > div.home-ct > div > mat-card > div > div.detail-ct.ng-star-inserted > div > lib-score > span > span.letter.ng-star-inserted').forEach(element => {
            switch (element.innerText.replace(/ /g, '',)) {
                case 'A':
                    element.innerText += ' 😎'
                    break
                case 'B':
                    element.innerText += ' 😃'
                    break
                case 'C':
                    element.innerText += ' 😐'
                    break
                case 'D':
                    element.innerText += ' 😟'
                    break
                case 'F':
                    element.innerText += ' 💀'
                    break
            }
        })
    }, 300)


    console.log('Injector loaded!')
})();
