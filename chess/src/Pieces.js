class Piece {
    constructor (color) {
        this.color = color;
        this.backgroundHeight = '80px';
        this.backgroundWidth = '80px';
    }
}

class Pawn extends Piece {
    constructor(color) {
        super(color);
        this.type = 'pawn'
        if(this.color == 'black') {
        this.backgroundImage = 'https://png.pngtree.com/png-vector/20210702/ourmid/pngtree-black-chess-pawn-png-image_3539520.jpg';
        } else {
            this.backgroundImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanpng.com%2Ffree%2Fwhite-pawn.html&psig=AOvVaw30Kin07X54H325wjwFNMfK&ust=1711314052938000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNC2xeOji4UDFQAAAAAdAAAAABAF'
        }
    }
        movePawn() {
        if (this.color == 'black') {
            this.y = (this.y - 80);
        } else {
            this.y = (this.y + 80);
        }
    }
}

export { Pawn, Piece }