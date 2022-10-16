//headerのJS機能
import indexHeader from "./header/index_top";
import loadingFunc from "./common/loading";

const index_header = new indexHeader();
index_header.init ();

const mv_loading = new loadingFunc();
mv_loading.init ();

// aos.js
AOS.init ();