import React from "react";
import { Link } from "react-router-dom";
import { TeamMember, teamMembers } from "../data/team";

const Team: React.FC = () => {

  // Convert teamMembers object to array for rendering
  const members: TeamMember[] = Object.values(teamMembers);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Il nostro Team</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-primary"
              />
              <h3 className="text-xl font-semibold dark:text-white">{member.name}</h3>
              <p className="text-primary font-medium dark:text-primary-light">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 text-center my-2">{member.bio}</p>
              <Link
                to={`/profile/${member.id}`}
                className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">
                Scopri di più
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
