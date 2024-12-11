import Result "mo:base/Result";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";

actor {
  // Define the user profile type
  type User = {
    id: Principal;
    username: Text;
    email: Text;
    phoneNumber: Text;
    gender: Text;
    location: Text;
    description: Text;
    image: Text;
    matchDescription: Text;
  };

  // Storage for users, using `Principal` (caller ID) as the key
  let users = HashMap.HashMap<Principal, User>(1, Principal.equal, Principal.hash);

  // Function to create a new user profile
  public shared ({caller: Principal}) func create_user_profile(
    username: Text,
    email: Text,
    phoneNumber: Text,
    gender: Text,
    location: Text,
    description: Text,
    image: Text,
    matchDescription: Text
  ): async Result.Result<Text, Text> {
    // Ensure the user does not already exist
    if (users.containsKey(caller)) {
      return #err("A profile already exists for this caller");
    };

    // Validate email format (basic example)
    if (!email.contains("@")) {
      return #err("Invalid email format");
    };

    // Create a new user profile
    let newUser: User = {
      id = caller;
      username;
      email;
      phoneNumber;
      gender;
      location;
      description;
      image;
      matchDescription;
    };

    // Attempt to store the user profile
    try {
      users.put(caller, newUser);
      return #ok("Profile created successfully");
    } catch {
      return #err("Failed to create profile due to storage error");
    }
  };

  // Function to retrieve a user by username
  public query func get_user_by_username(username: Text): async Result.Result<User, Text> {
    let user = Iter.find(users.vals(), func (u) { u.username == username });
    switch (user) {
      case null { return #err("User not found"); };
      case (?found) { return #ok(found); };
    }
  };

  // Function to retrieve all users lazily (as an iterator)
  public query func get_all_users(): async Iter.Iter<User> {
    return users.vals();
  };

  // Function to update a user's profile
  public shared ({caller: Principal}) func update_user_profile(
    username: ?Text,
    email: ?Text,
    phoneNumber: ?Text,
    gender: ?Text,
    location: ?Text,
    description: ?Text,
    image: ?Text,
    matchDescription: ?Text
  ): async Result.Result<Text, Text> {
    // Ensure the caller is updating their own profile
    switch (users.get(caller)) {
      case null {
        return #err("Profile not found for this caller");
      };
      case (?existingUser) {
        // Update only the provided fields
        let updatedUser = {
          id = existingUser.id; // Preserve the original ID
          username = switch (username) { case null { existingUser.username }; case (?val) { val } };
          email = switch (email) { case null { existingUser.email }; case (?val) { val } };
          phoneNumber = switch (phoneNumber) { case null { existingUser.phoneNumber }; case (?val) { val } };
          gender = switch (gender) { case null { existingUser.gender }; case (?val) { val } };
          location = switch (location) { case null { existingUser.location }; case (?val) { val } };
          description = switch (description) { case null { existingUser.description }; case (?val) { val } };
          image = switch (image) { case null { existingUser.image }; case (?val) { val } };
          matchDescription = switch (matchDescription) { case null { existingUser.matchDescription }; case (?val) { val } };
        };

        // Attempt to update the user profile
        try {
          users.put(caller, updatedUser);
          return #ok("Profile updated successfully");
        } catch {
          return #err("Failed to update profile due to storage error");
        }
      };
    }
  };
}
