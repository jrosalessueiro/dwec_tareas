
class Disk {

    constructor(dname, dgroup, dyear, dstyle, dlend) {
        this.dname = dname;
        this.dgroup = dgroup;
        this.dyear = dyear;
        this.dstyle = dstyle;
        this.dlend = dlend;
    }

    static add(disk) {
        this.coleccionDiscos.set(disk.dname, disk);
        console.log("Disco agregado correctamente:", disk);
    }
}

export { Disk };
