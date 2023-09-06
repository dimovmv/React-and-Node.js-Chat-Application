import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId='37e2389a-d6d4-4a7c-9504-3fa982601191'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};
export default ChatsPage;
