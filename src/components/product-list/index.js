import { connect } from 'react-redux';
import ProductList from './component.js';

function productFilter(items, phrase) {
    var reg = new RegExp(phrase, 'i');
    if (phrase != '') {
        items = items.filter(item => reg.test(item.data.name));
    }
    return items;
}

const mapStateToProps = state => {
    const products = productFilter(
        state.catalog.data.results,
        state.catalog.searchPhrase
    );
    return {
        view: state.catalog.selectedView,
        data: products,
        noProducts: products.length ? null :
            `We were unable to find results for "${state.catalog.searchPhrase}"`
    };
};

export default connect(mapStateToProps)(ProductList);
