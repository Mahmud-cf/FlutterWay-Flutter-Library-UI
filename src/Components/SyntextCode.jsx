import React from 'react';
import SyntextHighliter from './SyntextHighliter';

const SyntextCode = () => {
  const code = 
  `void main () {
runApp(const MyApp());
}
final RouteOvserver<ModalRoute<void>> routeOvserver =
    RouteOvserver<ModalRoute<void>>();
class MyApp extends stateFulWidget{
    const MyApp({super.key});

    @overview
    state<MyApp> createState() => _MyAppState();
}
  `;

  return (
    <div>
      <h1>Code Example</h1>
      <SyntextHighliter language="javascript">
        {code}
      </SyntextHighliter>
    </div>
  );
};

export default SyntextCode;
