const strings = {
  dashboard: {
    title: 'Dashboard',
    studentCount: 'Student Count',
    teacherCount: 'Teacher Count',
    staffCount: 'Staff Count'
  },
  course: {
    title: 'Course',
    courseList: 'Course Listing',
    addCourse: 'Add Course',
    des: 'Course Decription',
    courseId: 'Course Id',
    addSubject: 'Add Subjects',
    subjectList: 'Subject Listing',
    combination: 'Combination',
    selectCourse: 'Select Course',
    subDes: 'Subject Description',
    subjectId: 'Subject Id',
    subjectIcon: 'Subject Image',
    subjectName: 'Subject Name',
    addSubs: 'Add Subs',
    addCahpter: 'Add Chapter',
    viewSubs: 'View Subs',
    courseIcon: 'Course Image',
    placeholder: {
      courseName: 'Course Name'
    }
  },
  institute: {
    title: 'Institute',
    addInstitute: 'Add Institute',
    editInstitue: 'Edit Institute',
    viewInstitute: 'View Institute',
    instituteId: 'Institute Id',
    address: 'Address',
    area: 'Area',
    city: 'City',
    code: 'Institute Code',
    constactNo: 'Contact No',
    country: 'Country',
    courseName: 'Course Name',
    email: 'E-Mail',
    expiDate: 'Institute Expiry on',
    logo: 'Institute Image',
    name: 'Institute Name',
    selectIns: 'Select Institute',
    nonTecLimit: 'Non-Teacher Limit',
    status: 'Status',
    state: 'State',
    teachetLim: 'Teacher Limit',
    stuLimit: 'Student Limit',
    pincode: 'Zip Code'
  },
  branch: {
    title: 'Branch',
    addBranch: 'Add Branch',
    editBranch: 'Edit Branch',
    viewBranch: 'View Branch',
    instituteId: 'Institute Name',
    courseName: 'Course Name',
    expiDate: 'Branch Expiry on',
    logo: 'Branch Image',
    branchname: 'Branch Name',
    branchId: 'Branch Id',
    questionLimit: 'Question Limit'
  },
  batch: {
    title: 'Batch',
    addBatch: 'Add Batch',
    editBatch: 'Edit Batch',
    instituteName: 'Institute Name',
    branch: 'Branch Name',
    batchId: 'Batch Id',
    startDate: 'Start Date',
    endDate: 'End Date',
    startTime: 'Start Time',
    endTime: 'End Time',
    courseName: 'Course Name',
    batchName: 'Batch Name'
  },
  users: {
    title: 'Users',
    studentadmission: 'Student Admission',
    year: 'Year',
    acedmicYear: 'Academic Year',
    gender: 'Gender',
    role: 'Role',
    addnonTeacher: 'Add Staff',
    viewnonTeacher: 'View Staff',
    firstName: 'First Name',
    lastName: 'Last Name',
    mobileNu: 'Mobile Number',
    email: 'E-Mail',
    feeDescription: {
      title: 'Fee Description'
    },
    addTeacher: {
      title: 'Add Teacher',
      saveTeacherError: 'Unable to save details. Please try again later.',
      personalInfo: 'Personal Information',
      contactInfo: 'Contact Information',
      educationalqul: 'Educational Qualification',
      docToBeSubmitted: 'Documents to be Submitted',
      department: 'Department',
      designation: 'Desgination',
      gender: 'Gender',
      bloodGroup: 'Blood Group',
      fatherName: 'Father Name',
      spouseName: 'Spouse Name',
      DoB: 'Date of Birth',
      userNames: 'UserName',
      password: 'Password',
      DOJoining: 'Date of Joining',
      profilePicture: 'Profile Picture',
      mobileNumber: 'Mobile Number',
      eMail: 'E-Mail',
      address: 'Address',
      pincode: 'Zip Code',
      state: 'State',
      city: 'City',
      area: 'Area',
      emergencyContact: 'Emergency Contact',
      emergencyContactPerson: 'Emergency Contact Person',
      educationalBackground: 'Educational Background',
      yearofCompletion: 'Year Of Completion',
      collageName: 'Collage Name',
      collageCity: 'Collage City',
      yofExperience: 'Year Of Experience',
      previousCompanyOrInsName: 'Previous Company/Institute Name',
      bankName: 'Bank Name',
      bankAccNumb: 'Bank Account Number',
      BankIfsc: 'Bank IFSC Number',
      bankBranch: 'Bank Branch',
      panNumber: 'PAN Number',
      pfAccNumber: 'PF Account Number',
      esiAccountNumber: 'ESI Account Number',
      passportNumber: 'Passport Number',
      countyIssue: 'Country of Issue',
      passportExpiry: 'Passpoer Expiry',
      contactType: 'Contract Type',
      contractStartDate: 'Contract Start Date'
    },
    viewTeacher: {
      title: 'View Teacher'
    },
    viewStaff: {
      title: 'View Staff'
    },
    viewStudent: {
      title: 'View Student'
    }
  },
  assign: {
    title: 'Assign',
    assignTeacher: {
      title: 'Assign Teacher',
      list: 'Assigned Teacher List'
    },
    assignLessonPlane: {
      title: 'Assign Lesson Plan'
    },
    publishMaterial: 'Publish Material',
    assignment: {
      title: 'Assignment'
    }
  },
  attenance: {
    title: 'Attendance',
    staffattenanace: {
      title: 'Staff Attendance'
    },
    teacherAttenanace: {
      title: 'Teacher Attendance'
    },
    studentAttenance: {
      title: 'Student Attendance'
    }
  },

  staff: {
    dashboard: {
      title: 'Dashboard'
    },
    myTasks: {
      title: 'My Tasks',
      assignedTasks: 'Assigned tasks',
      reports: 'Reports'
    },
    myLeave: {
      title: 'My Leave',
      leaveApplication: 'Leave Application',
      leaveStatus: 'Leave Status'
    }
  },
  academicCalendar: {
    title: 'Academic Calendar',
    add_leave_calendar: 'Add Leave Calendar',
    view_leave_calendar: 'View Leave Calendar',
    add_academic_calendar: 'Add Academic Calendar',
    view_academic_calendar: 'View Academic Calendar'
  },
  testSetup: {
    title: 'Test Setup',
    addTestName: {
      title: 'Add Test Name',
      testName: 'Test Name',
      testDescription: 'Test Description'
    },
    addTestType: {
      title: 'Add Test Type',
      testType: 'Test Type',
      addTestDescriptin: 'Test Type Description'
    },
    addTestComponent: {
      title: 'Add Test Component',
      componentName: 'Component Name',
      componentDescription: 'Component Description'
    },
    markSetting: {
      title: 'Mark Settings',
      selecttestName: 'Select Test Name',
      selectTestType: 'Select Test Type',
      selectComponent: 'Select Component Name',
      paperName: 'Paper Name',
      moreComponent: 'Does it contain more Component?'
    },
    testInstruction: {
      title: 'Add Test Instruction',
      selsctTestName: 'Select Test Name',
      testName: 'Test Name',
      duration: 'Add Duration'
    }
  },
  instituteSetting: {
    title: 'Institute Setting',
    instituteTestSetting: 'Institute Test Setting',
    qrCodeSetting: {
      title: 'QrCode Setting'
    },
    learnModuleSetting: {
      title: 'Learn module Setting'
    }
  },

  //student
  student: {
    learn: {
      title: 'Learn',
      studentName: 'Student Name',
      teacherName: 'Teacher Name',
      branchName: 'Branch Name',
      courseName: 'Course Name'
    },
    assessment: {
      title: 'Assessment',
      attemptTest: 'Test to Attempt',
      upcomingTets: 'Upcomming Test',
      attemptedTest: 'Attempted Test',
      placeholder: {
        testType: 'Test Type'
      },
      attempt: {
        subjectWiseTest: 'Subject Wise Test',
        chapterWiseTest: 'Chapter Wise Test',
        chaptersTest: 'No of Chapters Test',
        noofQuestions: 'No Of Questions',
        duration: 'Durations',
        attempted: 'Attempted',
        pending: 'Pending',
        takeTest: 'Take Test'
      },
      test: {
        completed: 'Completed',
        marked: 'Marked for Review',
        read: 'Answered',
        unRead: 'UnAnswered',
        previous: 'Previous',
        next: 'Next',
        submit: 'Submit',
        markReview: 'Mark for review'
      }
    },
    myLeaves: {
      title: 'My Leaves',
      apply_leave: 'Apply Leave',
      leave_status: 'Leave Status'
    },
    assignment: {
      title: 'Assignment',
      date: 'Date',
      completedAssignemnt: 'Complete Assignment',
      newAssignement: 'New Assignement',
      viewAssignement: 'View Assignment',
      assignmentTitle: 'Assignement Title',
      assignmentDescription: 'Assignment Description',
      postedBy: 'Posted By',
      postedDate: 'Posted Date',
      attachment: 'Attachment',
      description: 'Description',
      attachmentUpload: 'Upload Attachment'
    }
  },
  //teacher
  teacher: {
    dashboard: {
      title: 'Dashboard'
    },
    lessonPlane: {
      title: 'Lesson Plan'
    },
    assignment: {
      title: 'Assignment',
      postassignment: 'Post Assignment',
      viewassignment: 'View Assignment'
    },
    attendance: {
      title: 'Attendance',
      myLeaves: '  My Leaves',
      studentAttenance: 'Student Attendance'
    }
  },

  //institute
  instituteAdmin: {
    assesment: {
      title: 'Assesment',
      createTest: 'Create Test',
      instructions: 'Instructions',
      noOfTestCreated: 'No of Test Created',
      npOfQuestionsd: 'No of Questions Avaiable',
      studentsTracking: 'Students Tracking',
      proctoring: 'Proctoring',
      selectData: 'Select Date',
      selectTime: 'Select Time',
      noOfStudent: 'Max No of Students'
    }
  },
  //--------------- ----------------------------------------------0ld----------------------------------
  login: {
    title: 'Login',
    description: 'Sign In to your account',
    submit: 'Submit',
    loginFailed:
      'Login failed. Please check the credentials or try after sometime.'
  },

  register: {
    noAccount: "Don't have an account yet?",
    signUp: 'SignUp'
  },

  validationMessages: {
    userName: {
      required: 'Username is required'
    },
    dob: 'MM-DD-YYYY',
    phone: {
      required: 'Phone number is required',
      numberOnly: 'Please enter only numbers',
      invalid: 'Please enter valid phone number'
    },
    email: {
      required: 'Email is required',
      invalid: 'Please enter valid email'
    },
    password: {
      required: 'Password is required',
      confirmPasswordRequired: 'Confirm Password is required',
      invalid:
        'Password must contain 8 characters, One uppercase, One lowercase, One number and one special case character',
      nonMatch: 'Passwords must match'
    },
    field: {
      required: 'Field is required'
    },
    batch: {
      selectInstitute: 'Select an Institute',
      selectBranch: 'Select a Branch',
      selectCourse: 'Select a Course',
      selectMaterial: 'Select a Material',
      selectStaus: 'Select a valid Status',
      saveBatchFailed: 'Error occured while saving the batch',
      deleteBatchFailed: 'Error Occured while deleting the batch'
    },
    course: {
      deleteCourseFailed: 'Error Occured while deleting the course',
      saveError: 'Error occured while saving the course'
    },
    session: {
      selectInstitute: 'Select an Institute',
      selectBranch: 'Select a Branch',
      selectCourse: 'Select a Course',
      selectBatch: 'Select a Batch',
      selectSubject: 'Select a Subject',
      selectTeacher: 'Select a Teacher',
      selectPlatform: 'Select a Platform',
      saveSessionFailed: 'Error occured while saving the session'
    }
  },
  header: {
    logout: 'Logout'
  },
  menu: {
    admin: {
      selectCourse: 'Select Course',
      selectBranch: 'Select Branch',
      selectBatch: 'Select Batch',
      selectSubject: 'Select Subject',
      selectChapter: 'Select Chapter',
      selectTopic: 'Select Topic'
    },
    lessonPlane: {
      title: 'Lesson Plan',
      assign_lesson_plan: 'Assign Lesson Plan',
      view_lesson_plan: 'View Lesson Plan',
      reports: 'Reports'
    }
  },

  modal: {
    test: {
      title: 'Submit Your Exam ?',
      subTitle: 'Once you submit the exam, you can not edit the answers'
    },
    otp: {
      title: 'SMS Verification',
      helpText: "Didn't receive the verification OTP?",
      resendAgain: 'Resend again'
    },
    deleteRecord: 'Are you sure you want to delete this record?',
    cancel: 'Cancel',
    submit: 'Submit',
    verify: 'Verify'
  },

  button: {
    back: 'Back',
    save: 'Save',
    apply: 'Apply',
    approve: 'Approve',
    reject: 'Reject',
    cancel: 'Cancel',
    evaluate: 'Evaluate',
    review: 'Review',
    done: 'Done',
    selectAll: 'Select All',
    dSelectAll: 'Deselect All',
    proceed: 'Proceed',
    createSectionText: 'Create Section',
    skipSectionText: 'Skip this step',
    download: 'Download',
    assign: 'Assign',
    previous: 'Previous',
    next: 'Next',
    submit: 'Submit',
    add: 'Add'
  },

  fileUpload: {
    dragAndDropText: 'DRAG AND DROP FILE TO UPLOAD',
    upload: 'Upload File',
    docFilesOnly: 'UPLOAD ONLY .DOC FILES',
    imageOnly: 'UPLOAD ONLY .PNG/.JPG FILES',
    assignment: 'UPLOAD ONLY .PDF,.DOCX,.JPG,.JPEG,.SVG,.PNG FILES'
  },
  pendingRequests: {
    approve: {
      title: 'Unlock Exam(s)',
      description:
        'Out of 180 minutes, 0 minutes has already spent and 180 minutes remaining. To change the remaining time enter the new remaining time (in minutes) below:'
    },
    reject: {
      title: 'Rejecting Request',
      description: 'Are you sure you want to reject this request?'
    }
  }
}

export default strings
