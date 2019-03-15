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
        let pageCount = this.pageCount();
        let allItem = (pageIndex + 1) * this.itemsPerPage;
        if (allItem > this.collection.length) {
            return -1
        } else {

        }
    }
}


/*// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {

}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {

}*/

let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageItemCount(0)); //should == 6