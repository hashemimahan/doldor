import React from 'react';

const Profile = (props) => {
    return (
        <div className={"h-full grid grid-cols-4 gap-2 content-center "}>
            <div className={"w-20 aspect-square bg-amber-300 rounded-full"}></div>
            <p className={"flex flex-col gap-1 font-iranYekan text-2xl font-bold col-span-3"} dir={"rtl"}>
                <span className={"text-red-300"}>{props.post}</span>
                <span>{props.name}</span>
            </p>
        </div>
    );
};

export default Profile;