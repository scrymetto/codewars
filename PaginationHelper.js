class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage
    };

    itemCount() {
        return this.collection.length
    };

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage)
    }

    pageItemCount(pageIndex) {
        let lastPage = this.pageCount() - 1;
        let lastPageAmount = this.itemsPerPage - (this.pageCount() * this.itemsPerPage - this.itemCount());
        if (pageIndex > lastPage) {
            return -1
        } else if (pageIndex === lastPage) {
            return lastPageAmount
        } else {
            return this.itemsPerPage
        }
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}


let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f', 'e'], 4);
console.log(helper.pageIndex(0));