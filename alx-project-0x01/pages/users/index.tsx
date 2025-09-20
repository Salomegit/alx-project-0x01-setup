import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import React from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold underline">Users Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
       {posts.map((user: UserProps) => (
          <UserCard
            key={user.id }
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}  
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        ))}
        
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default Users;
