var searchIndex = JSON.parse('{\
"jobserver":{"doc":"An implementation of the GNU make jobserver.","i":[[3,"Client","jobserver","A client of a jobserver",null,null],[3,"Acquired","","An acquired token from a jobserver.",null,null],[3,"HelperThread","","Structure returned from `Client::into_helper_thread` to…",null,null],[11,"drop_without_releasing","","This drops the `Acquired` token without releasing the…",0,[[]]],[11,"new","","Creates a new jobserver initialized with the given…",1,[[],[["result",6],["client",3]]]],[11,"from_env","","Attempts to connect to the jobserver specified in this…",1,[[],[["client",3],["option",4]]]],[11,"acquire","","Acquires a token from this jobserver client.",1,[[],[["result",6],["acquired",3]]]],[11,"configure","","Configures a child process to have access to this client\'s…",1,[[["command",3]]]],[11,"into_helper_thread","","Converts this `Client` into a helper thread to deal with a…",1,[[],[["result",6],["helperthread",3]]]],[11,"acquire_raw","","Blocks the current thread until a token is acquired.",1,[[],["result",6]]],[11,"release_raw","","Releases a jobserver token back to the original jobserver.",1,[[],["result",6]]],[11,"request_token","","Request that the helper thread acquires a token,…",2,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"drop","","",0,[[]]],[11,"drop","","",2,[[]]],[11,"clone","","",1,[[],["client",3]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]]],"p":[[3,"Acquired"],[3,"Client"],[3,"HelperThread"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);