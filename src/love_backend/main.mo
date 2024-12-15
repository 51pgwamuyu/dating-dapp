import Result "mo:base/Result";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";

actor {

  type User = {
    id: Principal;
    username: Text;
    email: Text;
    phonenumber: Text;
    gender: Text;
    location: Text;
    description: Text;
    image: Text;
    matchdescription: Text;
  };

  let users = HashMap.HashMap<Text, User>(100, Text.equal, Text.hash);
  let usersonprincipal = HashMap.HashMap<Principal, User>(100, Principal.equal, Principal.hash);

  public shared ({caller}) func create_user_profile(
    username: Text,
    email: Text,
    phonenumber: Text,
    gender: Text,
    location: Text,
    description: Text,
    image: Text,
    matchdescription: Text
  ): async Result.Result<Text, Text> {
    if (usersonprincipal.contains(caller)) {
      return #err("User with this Principal already exists");
    };
    if (users.containsKey(username)) {
      return #err("Username is already taken");
    };

    let newUser: User = {
      id = caller;
      username;
      email;
      phonenumber;
      gender;
      location;
      description;
      image;
      matchdescription;
    };

    users.put(username, newUser);
    usersonprincipal.put(caller, newUser);
    return #ok("Profile created successfully");
  };

  public query func get_user(username: Text): async Result.Result<User, Text> {
    switch (users.get(username)) {
      case (null) { return #err("User not found"); };
      case (?found) { return #ok(found); };
    }
  };

  public query func get_all_users(): async [Text] {
    return Iter.toArray(users.keys());
  };

  public shared ({caller}) func whoami(): async Text {
    return Principal.toText(caller);
  };
};
