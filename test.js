var a = {
    "data": [
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP0d1347baa26b4ea3a77f30b92f1c7b4c",
            "plan_name": "物业-环境主管/专员",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "物业部环境主管",
                                    "position_id": "GW254954c1363e49b584d85486ddb87ac5",
                                    "type": "2"
                                },
                                {
                                    "name": "物业部环境专员",
                                    "position_id": "GWfeea0657bc654fa58b816e080bc7bf60",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "物业部环境主管",
                                    "position_id": "GW254954c1363e49b584d85486ddb87ac5",
                                    "type": "2"
                                },
                                {
                                    "name": "物业部环境专员",
                                    "position_id": "GWfeea0657bc654fa58b816e080bc7bf60",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部经理",
                                            "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "系统,物业部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部经理",
                                            "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "物业部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部经理",
                                            "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "物业部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部经理",
                                            "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "物业部经理"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "物业部环境主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW254954c1363e49b584d85486ddb87ac5",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "物业部经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "物业部环境专员",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWfeea0657bc654fa58b816e080bc7bf60",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP0e8596650b8d42e9a08d04341b52d890",
            "plan_name": "物业-商管主管",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "物业部商管主管",
                                    "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "物业部商管主管",
                                    "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "物业部经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部经理",
                                            "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "物业部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部经理",
                                            "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "物业部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部经理",
                                            "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "物业部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部经理",
                                            "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "物业部经理"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "物业部商管主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP102b820cb27e4e3482da0bc1fb189437",
            "plan_name": "物业-物业经理",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "物业部经理",
                                    "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "物业部经理",
                                    "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批事项",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程物业副总",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程物业副总",
                                            "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程物业副总"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程物业副总",
                                            "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程物业副总"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程物业副总",
                                            "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程物业副总"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程物业副总",
                                            "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程物业副总"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "code": "execute",
                            "name": "执行"
                        }
                    ],
                    "name": "物业部经理",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP1bdcbc2167294c3ab654ef09462553bd",
            "plan_name": "物业-工程物业副总",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "工程物业副总",
                                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "工程物业副总",
                                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "code": "execute",
                            "name": "执行"
                        }
                    ],
                    "name": "工程物业副总",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP2d6169e10bbb488e8ed470211a6d2e63",
            "plan_name": "工程巡检-暖通主管/新云经理/弱电主管",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "工程部暖通主管",
                                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部新云经理/弱电主管",
                                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "工程部暖通主管",
                                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部新云经理/弱电主管",
                                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部暖通主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部新云经理/弱电主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {},
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP2e12a5b8a87d4aa3adc18d360cedc1a6",
            "plan_name": "gezhanbin04",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建"
                        },
                        {
                            "code": "assign",
                            "name": "指派"
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "新岗位",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "after",
                    "minute": 20,
                    "selected": true
                },
                "startTime": {
                    "around": "front",
                    "minute": 10,
                    "selected": true
                }
            },
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP3eb17559f41f40d88b974c4d594a938c",
            "plan_name": "物业-商管员",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "物业部商管员",
                                    "position_id": "GWbf5e0a3bf7c74ebdb60399edbd48cdc3",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "物业部商管员",
                                    "position_id": "GWbf5e0a3bf7c74ebdb60399edbd48cdc3",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部商管主管",
                                            "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "系统,物业部商管主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "物业部商管主管",
                                            "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "物业部商管主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部商管主管",
                                            "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "系统,物业部商管主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "物业部商管主管",
                                            "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "系统,物业部商管主管"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "物业部商管员",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWbf5e0a3bf7c74ebdb60399edbd48cdc3",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "auditDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核延期",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "物业部经理",
                                            "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "物业部经理"
                                }
                            ],
                            "code": "audit",
                            "expecte_operation": false,
                            "name": "审核"
                        }
                    ],
                    "name": "物业部商管主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "物业部经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW6ac8db48978749d9a73c62f8e0d9a517",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP431bb2431472492890ac825f14d674ad",
            "plan_name": "安品-巡检",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "安品部经理",
                                    "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                    "type": "2"
                                },
                                {
                                    "name": "安品部主管",
                                    "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "安品部经理",
                                    "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                    "type": "2"
                                },
                                {
                                    "name": "安品部主管",
                                    "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": true,
                            "limit_domain": true,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "安品部经理",
                                    "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                    "type": "2"
                                },
                                {
                                    "name": "安品部主管",
                                    "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部经理",
                                            "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部主管",
                                            "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "安品部经理,安品部主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请事项",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部经理",
                                            "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部主管",
                                            "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "安品部经理,安品部主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部经理",
                                            "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部主管",
                                            "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "安品部经理,安品部主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部经理",
                                            "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部主管",
                                            "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "安品部经理,安品部主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部经理",
                                            "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部主管",
                                            "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "安品部经理,安品部主管"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批事项",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "安品部经理",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "安品部经理",
                                    "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                    "type": "2"
                                },
                                {
                                    "name": "安品部主管",
                                    "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部经理",
                                            "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部主管",
                                            "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "安品部经理,安品部主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请事项",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部经理",
                                            "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部主管",
                                            "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "安品部经理,安品部主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部经理",
                                            "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部主管",
                                            "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "安品部经理,安品部主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部经理",
                                            "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部主管",
                                            "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "安品部经理,安品部主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部经理",
                                            "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "安品部主管",
                                            "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "安品部经理,安品部主管"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批事项",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "安品部主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 60,
                    "selected": true
                },
                "startTime": {
                    "around": "front",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP4e078275d5684ba1b07b7d2390f721f7",
            "plan_name": "052802",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建"
                        },
                        {
                            "code": "assign",
                            "name": "指派"
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "岗位2",
                                            "position_id": "GW3324ebbdac914d648115eef26f40987b",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "岗位2"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "岗位2",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW3324ebbdac914d648115eef26f40987b",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {},
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP506525d95857417f90cb1a9c3153c424",
            "plan_name": "工程-巡检(S)",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "工程部经理",
                                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "工程部经理",
                                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程物业副总",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程物业副总",
                                            "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程物业副总"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程物业副总",
                                            "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程物业副总"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部经理",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {},
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP6386212e02b440ad8c8556852fe3f049",
            "plan_name": "抢单-计划",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "新岗位",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {},
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP701a04c7b92c4231954e40fee7245a4e",
            "plan_name": "工程-巡检（F）",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "robbing",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "暖通巡检维保技工",
                                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                                    "type": "2"
                                },
                                {
                                    "name": "强电巡检维保技工",
                                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                                    "type": "2"
                                },
                                {
                                    "name": "弱电巡检维保技工",
                                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                                    "type": "2"
                                },
                                {
                                    "name": "综合巡检维保技工",
                                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "暖通巡检维保技工",
                                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                                    "type": "2"
                                },
                                {
                                    "name": "强电巡检维保技工",
                                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                                    "type": "2"
                                },
                                {
                                    "name": "弱电巡检维保技工",
                                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                                    "type": "2"
                                },
                                {
                                    "name": "综合巡检维保技工",
                                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部弱电主管",
                                            "position_id": "GW0794722d016b49ba84243f2cf0a9f4ad",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部弱电主管,工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部弱电主管",
                                            "position_id": "GW0794722d016b49ba84243f2cf0a9f4ad",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部弱电主管,工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "暖通巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部弱电主管",
                                            "position_id": "GW0794722d016b49ba84243f2cf0a9f4ad",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部弱电主管,工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "强电巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部弱电主管",
                                            "position_id": "GW0794722d016b49ba84243f2cf0a9f4ad",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部弱电主管,工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "弱电巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部弱电主管",
                                            "position_id": "GW0794722d016b49ba84243f2cf0a9f4ad",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部弱电主管,工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部弱电主管",
                                            "position_id": "GW0794722d016b49ba84243f2cf0a9f4ad",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部弱电主管,工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "综合巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部弱电主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW0794722d016b49ba84243f2cf0a9f4ad",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部暖通主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部新云经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部综合主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部强电主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP723f401534e64af89b1474cd1a62d3ff",
            "plan_name": "工程-维保",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "robbing",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "暖通巡检维保技工",
                                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                                    "type": "2"
                                },
                                {
                                    "name": "综合巡检维保技工",
                                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                                    "type": "2"
                                },
                                {
                                    "name": "强电巡检维保技工",
                                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                                    "type": "2"
                                },
                                {
                                    "name": "弱电巡检维保技工",
                                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "暖通巡检维保技工",
                                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                                    "type": "2"
                                },
                                {
                                    "name": "综合巡检维保技工",
                                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                                    "type": "2"
                                },
                                {
                                    "name": "强电巡检维保技工",
                                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                                    "type": "2"
                                },
                                {
                                    "name": "弱电巡检维保技工",
                                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部暖通主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部新云经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "系统,工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "暖通巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部综合主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "综合巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "强电巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部强电主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "弱电巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {},
            "work_type": "1",
            "work_type_name": "维保"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP7da49e8c724547c4bb4df8a056da5fc8",
            "plan_name": "gezhanbin--新建后执行计划",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": true,
                            "filter_scheduling": true,
                            "limit_domain": true,
                            "minute": 10,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "auditReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核换人",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核事项",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核延期",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核结束",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核加人",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "audit",
                            "expecte_operation": true,
                            "minute": 10,
                            "name": "审核"
                        },
                        {
                            "code": "assign",
                            "expecte_operation": true,
                            "filter_scheduling": true,
                            "limit_domain": true,
                            "minute": 10,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批事项",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": true,
                            "minute": 10,
                            "name": "审批"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请事项",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "新岗位",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "after",
                    "minute": 10,
                    "selected": true
                },
                "startTime": {
                    "around": "front",
                    "minute": 10,
                    "selected": true
                }
            },
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP81e85bc03a104fb9a292d73faeb36cf7",
            "plan_name": "工程-巡检-强电（P）",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "工程部强电主管",
                                    "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "工程部强电主管",
                                    "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部强电主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP8d4cf0e345ba4d2382ff405654f75355",
            "plan_name": "shanchu5",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建"
                        },
                        {
                            "code": "assign",
                            "expecte_operation": true,
                            "filter_scheduling": true,
                            "limit_domain": true,
                            "minute": 1,
                            "name": "指派"
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "auditReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核换人",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核事项",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核延期",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核结束",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核加人",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "audit",
                            "expecte_operation": true,
                            "minute": 1,
                            "name": "审核"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批事项",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": true,
                            "minute": 10,
                            "name": "审批"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请事项",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "新岗位",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "after",
                    "minute": 1,
                    "selected": true
                },
                "startTime": {
                    "around": "front",
                    "minute": 1,
                    "selected": true
                }
            },
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP9307c306389b47e7a55c7f32ee99232d",
            "plan_name": "巡检-工程物业安品管理人员",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "robbing",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "工程物业副总",
                                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部弱电主管",
                                    "position_id": "GW0794722d016b49ba84243f2cf0a9f4ad",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部新云工程师",
                                    "position_id": "GW257cd201cc2c4a79b2d0448ec10c407d",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部暖通主管",
                                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部新云经理/弱电主管",
                                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部综合主管",
                                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部强电主管",
                                    "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部经理",
                                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                    "type": "2"
                                },
                                {
                                    "name": "物业部环境主管",
                                    "position_id": "GW254954c1363e49b584d85486ddb87ac5",
                                    "type": "2"
                                },
                                {
                                    "name": "物业部商管主管",
                                    "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                                    "type": "2"
                                },
                                {
                                    "name": "安品部主管",
                                    "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                    "type": "2"
                                },
                                {
                                    "name": "安品部经理",
                                    "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                    "type": "2"
                                },
                                {
                                    "name": "物业部安管主管",
                                    "position_id": "GW5c069f54c9a04c2c95f7b261b8b5a9ff",
                                    "type": "2"
                                },
                                {
                                    "name": "安全环境主管",
                                    "position_id": "GW75b51416756f4a16b86c74744111f1ff",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "工程物业副总",
                                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部弱电主管",
                                    "position_id": "GW0794722d016b49ba84243f2cf0a9f4ad",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部新云工程师",
                                    "position_id": "GW257cd201cc2c4a79b2d0448ec10c407d",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部暖通主管",
                                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部新云经理/弱电主管",
                                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部综合主管",
                                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部强电主管",
                                    "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部经理",
                                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                    "type": "2"
                                },
                                {
                                    "name": "物业部环境主管",
                                    "position_id": "GW254954c1363e49b584d85486ddb87ac5",
                                    "type": "2"
                                },
                                {
                                    "name": "物业部商管主管",
                                    "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                                    "type": "2"
                                },
                                {
                                    "name": "安品部主管",
                                    "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                                    "type": "2"
                                },
                                {
                                    "name": "安品部经理",
                                    "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                                    "type": "2"
                                },
                                {
                                    "name": "物业部安管主管",
                                    "position_id": "GW5c069f54c9a04c2c95f7b261b8b5a9ff",
                                    "type": "2"
                                },
                                {
                                    "name": "安全环境主管",
                                    "position_id": "GW75b51416756f4a16b86c74744111f1ff",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程物业副总",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部弱电主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW0794722d016b49ba84243f2cf0a9f4ad",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部新云工程师",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW257cd201cc2c4a79b2d0448ec10c407d",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部暖通主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部新云经理/弱电主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部综合主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部强电主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部经理",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "物业部环境主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW254954c1363e49b584d85486ddb87ac5",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "物业部商管主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWd352ff05ea0644c8be29fb114074be47",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "安品部主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW4f7fe7e7c551492b801f2c99cc49620d",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "安品部经理",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWbc78c796c96840f9a15bd1c21a89a8bb",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "物业部安管主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW5c069f54c9a04c2c95f7b261b8b5a9ff",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "安全环境主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW75b51416756f4a16b86c74744111f1ff",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {},
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP938863a841c141aab2f5acc73b600911",
            "plan_name": "shanchu6",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "assign",
                            "limit_domain": false,
                            "name": "新建"
                        },
                        {
                            "code": "assign",
                            "expecte_operation": true,
                            "filter_scheduling": true,
                            "limit_domain": true,
                            "minute": 1,
                            "name": "指派"
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "auditReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核换人",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核事项",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核延期",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核结束",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核加人",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "audit",
                            "expecte_operation": true,
                            "minute": 1,
                            "name": "审核"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批事项",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": true,
                            "minute": 1,
                            "name": "审批"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请事项",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "code": "assign",
                            "expecte_operation": true,
                            "filter_scheduling": true,
                            "limit_domain": true,
                            "minute": 1,
                            "name": "指派"
                        }
                    ],
                    "name": "新岗位",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "after",
                    "minute": 10,
                    "selected": true
                },
                "startTime": {
                    "around": "front",
                    "minute": 10,
                    "selected": true
                }
            },
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP957bf2a2a5a3443eb9d044f50c2de701",
            "plan_name": "工程巡检-（综合主管/经理）",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "工程部综合主管",
                                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部经理",
                                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "工程部综合主管",
                                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                    "type": "2"
                                },
                                {
                                    "name": "工程部经理",
                                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部综合主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部经理",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {},
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP96e92d7df0b14b5491759c1a29a6f6e2",
            "plan_name": "工程-巡检（M）",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "工程物业副总",
                                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "工程物业副总",
                                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程物业副总",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8f94d226066a435a9c9ddbc249453812",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {},
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP98fcbed273be4494b7fc812c3c9f9245",
            "plan_name": "052804",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建"
                        },
                        {
                            "code": "assign",
                            "name": "指派"
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "岗位2",
                                            "position_id": "GW3324ebbdac914d648115eef26f40987b",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "岗位1",
                                            "position_id": "GW7c45c70c650a47188fa12e0210a3d79b",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "岗位2,岗位1"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        },
                        {
                            "code": "execute",
                            "name": "执行"
                        }
                    ],
                    "name": "岗位2",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW3324ebbdac914d648115eef26f40987b",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "岗位1",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW7c45c70c650a47188fa12e0210a3d79b",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {},
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP9eeb4516ba1b4921a899098ea7b0d47c",
            "plan_name": "工程-巡检-弱电（P）",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "工程部新云经理",
                                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "工程部新云经理",
                                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部新云经理",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FP9efd763d66c64c4989c3b31b1ab657e9",
            "plan_name": "gezhanbin计划--指派",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "assign",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "系统",
                                    "position_id": "systemPosition",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                },
                                {
                                    "name": "新岗位123",
                                    "position_id": "GW105a3863ef494fbbabd68b53451bab14",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请事项",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "系统,新岗位"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批事项",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "新岗位",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        }
                    ],
                    "name": "新岗位123",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW105a3863ef494fbbabd68b53451bab14",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "after",
                    "minute": 10,
                    "selected": true
                },
                "startTime": {
                    "around": "front",
                    "minute": 10,
                    "selected": true
                }
            },
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FPaf6f5e6e4faa4b2aa9c30c295eac411d",
            "plan_name": "gezhanbin--新建后抢单-计划",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "robbing",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": true,
                            "filter_scheduling": true,
                            "limit_domain": true,
                            "minute": 10,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "auditReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核换人",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核事项",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核延期",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核结束",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核加人",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "audit",
                            "expecte_operation": true,
                            "minute": 10,
                            "name": "审核"
                        },
                        {
                            "code": "assign",
                            "expecte_operation": true,
                            "filter_scheduling": true,
                            "limit_domain": true,
                            "minute": 10,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批事项",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": true,
                            "minute": 10,
                            "name": "审批"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请事项",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "新岗位",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "after",
                    "minute": 10,
                    "selected": true
                },
                "startTime": {
                    "around": "front",
                    "minute": 10,
                    "selected": true
                }
            },
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FPbbbf10ee3842461fa7b02538c126a147",
            "plan_name": "工程-运行",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "robbing",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "暖通巡检维保技工",
                                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                                    "type": "2"
                                },
                                {
                                    "name": "综合巡检维保技工",
                                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                                    "type": "2"
                                },
                                {
                                    "name": "强电巡检维保技工",
                                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                                    "type": "2"
                                },
                                {
                                    "name": "弱电巡检维保技工",
                                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "暖通巡检维保技工",
                                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                                    "type": "2"
                                },
                                {
                                    "name": "综合巡检维保技工",
                                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                                    "type": "2"
                                },
                                {
                                    "name": "强电巡检维保技工",
                                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                                    "type": "2"
                                },
                                {
                                    "name": "弱电巡检维保技工",
                                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部暖通主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部新云经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "暖通巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部综合主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "综合巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "强电巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部强电主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部暖通主管",
                                            "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部新云经理",
                                            "position_id": "GW4d217bb9797d47e183bfaf29a9433d54",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部综合主管",
                                            "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        },
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部暖通主管,工程部新云经理,工程部综合主管,工程部强电主管,工程部经理"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "弱电巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {},
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FPc4ac0540675b4b6e934b8099355f508c",
            "plan_name": "工程-巡检-暖通（P）",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "工程部暖通主管",
                                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "工程部暖通主管",
                                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部暖通主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW27c21915c63747ca9a6e40765ba09738",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FPc53911ceecd9464a988007941485f820",
            "plan_name": "工程-巡检-综合（P）",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "工程部综合主管",
                                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "工程部综合主管",
                                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部经理",
                                            "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部经理"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "工程部综合主管",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW68a986fd15974f6fbec20aee0cd2dbe4",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        }
                    ],
                    "name": "工程部经理",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW97dbd2fe53304134a7a7b4604151a93a",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FPd8e3fc54046a44fc87fcff10f9be666f",
            "plan_name": "001",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "暖通巡检维保技工",
                                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                                    "type": "2"
                                },
                                {
                                    "name": "综合巡检维保技工",
                                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                                    "type": "2"
                                },
                                {
                                    "name": "强电巡检维保技工",
                                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                                    "type": "2"
                                },
                                {
                                    "name": "弱电巡检维保技工",
                                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "暖通巡检维保技工",
                                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                                    "type": "2"
                                },
                                {
                                    "name": "综合巡检维保技工",
                                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                                    "type": "2"
                                },
                                {
                                    "name": "强电巡检维保技工",
                                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                                    "type": "2"
                                },
                                {
                                    "name": "弱电巡检维保技工",
                                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "暖通巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "综合巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "强电巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        },
                        {
                            "code": "assign",
                            "expecte_operation": false,
                            "filter_scheduling": false,
                            "limit_domain": false,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "暖通巡检维保技工",
                                    "position_id": "GW62c5f246cc414453a3c0e5023d3ecfd8",
                                    "type": "2"
                                },
                                {
                                    "name": "综合巡检维保技工",
                                    "position_id": "GW7cd14af0863245f48c62de3c7e95651c",
                                    "type": "2"
                                },
                                {
                                    "name": "强电巡检维保技工",
                                    "position_id": "GW7ebde047496b447a887352946fab8c33",
                                    "type": "2"
                                },
                                {
                                    "name": "弱电巡检维保技工",
                                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "name": "工程部强电主管",
                    "operatList": [
                        {
                            "_show": true,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": true,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                    "type": "2"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "工程部强电主管",
                                            "position_id": "GW8ecc7db3b81d4dc6acf8494539137c0c",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "工程部强电主管"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "弱电巡检维保技工",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GWe63ebb35859a45bf938be20dc5c445a1",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "front",
                    "minute": 15,
                    "selected": true
                },
                "startTime": {
                    "around": "after",
                    "minute": 60,
                    "selected": true
                }
            },
            "work_type": "3",
            "work_type_name": "巡检"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FPd96e740ac3634601a0cfdf050fd9ca90",
            "plan_name": "gezhanbin--新建后指派计划",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "assign",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "expecte_operation": true,
                            "filter_scheduling": true,
                            "limit_domain": true,
                            "minute": 10,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": false,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "auditReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核换人",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核事项",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核延期",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核结束",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "checked": true,
                                    "code": "auditAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审核加人",
                                    "next_route": [
                                        {
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "audit",
                            "expecte_operation": true,
                            "minute": 10,
                            "name": "审核"
                        },
                        {
                            "code": "assign",
                            "expecte_operation": true,
                            "filter_scheduling": true,
                            "limit_domain": true,
                            "minute": 10,
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批事项",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批延期",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批加人",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": true,
                            "minute": 10,
                            "name": "审批"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyMatters",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请事项",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyDelay",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请延期",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyAddingPeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请加人",
                                    "next_code": "audit",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "audit",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "新岗位",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": false,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": false,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "after",
                    "minute": 10,
                    "selected": true
                },
                "startTime": {
                    "around": "front",
                    "minute": 10,
                    "selected": true
                }
            },
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FPe97c3aeff5e443f792a310b39dd80240",
            "plan_name": "gezhanbin--申请换人-审批",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        },
                        {
                            "code": "assign",
                            "name": "指派",
                            "next_route": [
                                {
                                    "name": "新岗位",
                                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                    "type": "2"
                                }
                            ]
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请换人",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                },
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "新岗位",
                                            "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                                            "type": "2"
                                        }
                                    ],
                                    "selectPositionName": "新岗位"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        },
                        {
                            "apply_items": [
                                {
                                    "checked": true,
                                    "code": "approvalReplacePeople",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批换人",
                                    "next_route": []
                                },
                                {
                                    "checked": true,
                                    "code": "approvalClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "审批结束",
                                    "next_route": []
                                }
                            ],
                            "code": "approve",
                            "expecte_operation": false,
                            "name": "审批"
                        },
                        {
                            "code": "execute",
                            "name": "执行"
                        }
                    ],
                    "name": "新岗位",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "axx",
                            "description": "bbbbb",
                            "dict_type": "",
                            "name": ""
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": false,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW383342115efd4bf99d5de90466b5b9d4",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "after",
                    "minute": 10,
                    "selected": true
                },
                "startTime": {
                    "around": "front",
                    "minute": 10,
                    "selected": true
                }
            },
            "work_type": "4",
            "work_type_name": "运行"
        },
        {
            "execute_type": "plan",
            "execute_type_name": "计划",
            "plan_id": "FPfb43e5ec41a247bab4448e36c30c0e19",
            "plan_name": "gezhanbin02",
            "post_and_duty": [
                {
                    "delete": {
                        "show": false
                    },
                    "duty": [
                        {
                            "arrival_time_allow_execute": false,
                            "code": "create",
                            "executie_mode": "execute",
                            "limit_domain": false,
                            "name": "新建"
                        },
                        {
                            "code": "assign",
                            "name": "指派"
                        }
                    ],
                    "id": "",
                    "name": "系统",
                    "position_id": "systemPosition",
                    "type": "system"
                },
                {
                    "duty": [
                        {
                            "code": "execute",
                            "name": "执行"
                        },
                        {
                            "apply_items": [
                                {
                                    "aduitList": [
                                        {
                                            "next_code": "audit",
                                            "next_name": "需要审核"
                                        },
                                        {
                                            "next_code": "approve",
                                            "next_name": "需要审批"
                                        }
                                    ],
                                    "checked": true,
                                    "code": "applyClose",
                                    "description": "",
                                    "dict_type": "",
                                    "name": "申请结束",
                                    "next_code": "approve",
                                    "next_route": [
                                        {
                                            "isCurr": true,
                                            "isShow": true,
                                            "mark": "approve",
                                            "name": "系统",
                                            "position_id": "systemPosition",
                                            "type": "system"
                                        }
                                    ],
                                    "selectPositionName": "系统"
                                }
                            ],
                            "code": "apply",
                            "name": "申请"
                        }
                    ],
                    "name": "新岗位123",
                    "operatList": [
                        {
                            "_show": false,
                            "code": "execute",
                            "description": "在专业和职责范围内完成工单中要求的工作事项，并及时反馈工作进度",
                            "dict_type": "",
                            "name": "执行"
                        },
                        {
                            "_show": true,
                            "code": "create",
                            "description": "负责以工单的形式发起一项新的任务",
                            "dict_type": "",
                            "name": "新建"
                        },
                        {
                            "_show": true,
                            "code": "audit",
                            "description": "负责对申请人提出的正常结束工单请求，或异常中止工单请求，进行合理性判断并给予后续操作指示",
                            "dict_type": "",
                            "name": "审核"
                        },
                        {
                            "_show": true,
                            "code": "assign",
                            "description": "负责将工单指派给合适的岗位或具体人员进行处理",
                            "dict_type": "",
                            "name": "指派"
                        },
                        {
                            "_show": true,
                            "code": "approve",
                            "description": "负责结束所有工作事项已完成的工单",
                            "dict_type": "",
                            "name": "审批"
                        },
                        {
                            "_show": false,
                            "code": "apply",
                            "description": "当工单完成或无法进行时，向相关负责人提出申请，以结束工单",
                            "dict_type": "",
                            "name": "申请"
                        }
                    ],
                    "position_id": "GW105a3863ef494fbbabd68b53451bab14",
                    "type": "2"
                }
            ],
            "repair_flag": "0",
            "time_limit": {
                "endTime": {
                    "around": "after",
                    "minute": 20,
                    "selected": true
                },
                "startTime": {
                    "around": "front",
                    "minute": 10,
                    "selected": true
                }
            },
            "work_type": "4",
            "work_type_name": "运行"
        }
    ],
    "count": 31
};