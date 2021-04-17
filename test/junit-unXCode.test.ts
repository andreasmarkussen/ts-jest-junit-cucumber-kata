import * as juuxc from './junit-unXCode';

test("Should be able to take an xcodeJUnitName and make it 'Space Cased'", ()=>{
  const jUnitName="Hello World Test Case";
  const xcodeJUnitName="test000helloWorldTestCase";
  const fixedXCodeName = juuxc.prefixRemover(xcodeJUnitName);
  // Task 1a - Enable the check below
  //  Expect(fixedXCodeName).not.toContain("test000");
  const fixedXCodeNameWithCasing = juuxc.xcodeCaseFixer(fixedXCodeName);
  // Task 1b - Enable the check below
  //  Expect(fixedXCodeName).not.toContain("test000");
  // expect(fixedXCodeNameWithCasing).toEqual(jUnitName);
})

test("Should be able to find the right jUnitName in a list", ()=>{
    const originalCucumberNames: juuxc.CucumberName[] = [
      {scenarioName: "First Test case", filePath: '/FIRST/some.feature'},
      {scenarioName: "Hello world Test case", filePath: '/RIGHT/pick-this.feature'},
      {scenarioName: "Third test case", filePath: '/THIRD/some.feature'}
    ];

    const jUnitName = "Hello world Test case";
    const xcodeJUnitName = "test000helloWorldTestCase"; // It is on pur
    const scenarioCandidate =  juuxc.findCucumberScenarioWithWrongCaseAndSpacing(xcodeJUnitName, originalCucumberNames);
    
    // Task 2: Remove this expectation and make it green
    //expect(scenarioCandidate.filePath).toContain('RIGHT');
})

test("Should be able to give the Folder Name", ()=>{
  const cucumberScenario: juuxc.CucumberName = 
    {scenarioName: "First Test case", filePath: '/FOLDER/some.feature'}

  // Task 3: Remove this expectation and make it green
  // expect(juuxc.folderName(cucumberScenario)).toEqual('FOLDER');
})