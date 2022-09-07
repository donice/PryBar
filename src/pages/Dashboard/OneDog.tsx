import React from "react";
import Dog from "../../assets/dog.png";
import DashboardButton from "../../components/buttons/DashboardButton";

interface Props {
  topic: string;
  sireName: string;
  sireContent?: string;
  damName: string;
  damContent?: string;
}

const Details = ({
  topic,
  sireName,
  sireContent,
  damName,
  damContent,
}: Props) => {
  return (
    <div className="pt-4">
      <p>{topic}</p>
      <div className="flex">
        <p className="w-[50%] font-bold">
          {sireName} : <span className="font-light">eee{sireContent}</span>
        </p>
        <p className="font-bold">
          {damName} : <span className="font-light">{damContent}</span>
        </p>
      </div>
    </div>
  );
};

const OneDog = () => {
  return (
    <div className="flex justify-between">
      <div className="text-primary w-[60%] h-[90vh] overflow-scroll">
        <div className="flex justify-between items-center py-[2em]">
          <p className="text-large">Bingo</p>
          <div className="w-[170px] mr-2">
            <DashboardButton text="Download Certificate"/>
          </div>
        </div>
        <div className="flex justify-between text-left py-2">
          <p className="w-[50%]">
            Registration ID: <span>#48387583</span>
          </p>
          <p className="w-[50%]">
            Breed: <span>German Shepherd</span>
          </p>
        </div>

        <div className="flex justify-between py-2">
          <p>
            Date Of Birth: <span> 10/ 01/ 2001.</span>
          </p>
          <p className="w-[50%]">
            Sex: <span>Male.</span>
          </p>
        </div>

        <div className="flex justify-between py-2">
          <p>
            Color: <span>Black.</span>
          </p>
          <p className="w-[50%]">
            Hip Score: <span>60.</span>
          </p>
        </div>

        <div className="flex justify-between py-2">
          <p>
            Title Achieved: <span> John Doe.</span>
          </p>
          <p className="w-[50%]">
            DNA Result: <span>John Doe.</span>
          </p>
        </div>

        <p className="py-[1em]">About Bingo:</p>
        <p className="w-[80%] pb-[2em]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <Details topic="Parents" sireName="Sire" damName="Dam" />


        <div className="mt-4 mb-[1em]">
          <p>GRAND PARENTS</p>
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
        </div>


        <div className="py-6 mb-[1em]">
          <p>GREAT GRAND PARENTS</p>
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
        </div>


        <div className="">
          <p>GREAT GREAT GRAND PARENTS</p>
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
          <Details topic="Parents" sireName="Sire" damName="Dam" />
        </div>
      </div>

      <div className="w-[35%]">
        <div className="rounded-secondary overflow-hidden">
          <img src={Dog} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OneDog;
