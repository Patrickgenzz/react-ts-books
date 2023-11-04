import imageBufferUtil from '../../utils/imageBufferUtil';

const MemberDashboard: React.FC = () => {
  //get user from session storage
  const storedUser = sessionStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : {};

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1 className="text-white">Member Dashborad</h1>
          <h2 className="text-white">Welcome {user.name}</h2>
          <img src={imageBufferUtil(user.image.data)} alt="User Image" />
        </div>
      </section>
    </>
  );
};

export default MemberDashboard;
